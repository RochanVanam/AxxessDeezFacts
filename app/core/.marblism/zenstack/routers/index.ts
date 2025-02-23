/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createPatientRouter from "./Patient.router";
import createMedicationRouter from "./Medication.router";
import createPrescriptionRouter from "./Prescription.router";
import createMedicationOrderRouter from "./MedicationOrder.router";
import createHealthLogRouter from "./HealthLog.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import createPwaSubscriptionRouter from "./PwaSubscription.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as PatientClientType } from "./Patient.router";
import { ClientType as MedicationClientType } from "./Medication.router";
import { ClientType as PrescriptionClientType } from "./Prescription.router";
import { ClientType as MedicationOrderClientType } from "./MedicationOrder.router";
import { ClientType as HealthLogClientType } from "./HealthLog.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";
import { ClientType as PwaSubscriptionClientType } from "./PwaSubscription.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        patient: createPatientRouter(router, procedure),
        medication: createMedicationRouter(router, procedure),
        prescription: createPrescriptionRouter(router, procedure),
        medicationOrder: createMedicationOrderRouter(router, procedure),
        healthLog: createHealthLogRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
        pwaSubscription: createPwaSubscriptionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    patient: PatientClientType<AppRouter>;
    medication: MedicationClientType<AppRouter>;
    prescription: PrescriptionClientType<AppRouter>;
    medicationOrder: MedicationOrderClientType<AppRouter>;
    healthLog: HealthLogClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
    pwaSubscription: PwaSubscriptionClientType<AppRouter>;
}
