/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.MedicationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medication.createMany(input as any))),

        create: procedure.input($Schema.MedicationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medication.create(input as any))),

        deleteMany: procedure.input($Schema.MedicationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medication.deleteMany(input as any))),

        delete: procedure.input($Schema.MedicationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medication.delete(input as any))),

        findFirst: procedure.input($Schema.MedicationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).medication.findFirst(input as any))),

        findMany: procedure.input($Schema.MedicationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).medication.findMany(input as any))),

        findUnique: procedure.input($Schema.MedicationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).medication.findUnique(input as any))),

        updateMany: procedure.input($Schema.MedicationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medication.updateMany(input as any))),

        update: procedure.input($Schema.MedicationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medication.update(input as any))),

        count: procedure.input($Schema.MedicationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).medication.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MedicationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MedicationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MedicationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MedicationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MedicationGetPayload<T>, Context>) => Promise<Prisma.MedicationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MedicationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MedicationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MedicationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MedicationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MedicationGetPayload<T>, Context>) => Promise<Prisma.MedicationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MedicationFindFirstArgs, TData = Prisma.MedicationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.MedicationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MedicationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MedicationFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MedicationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MedicationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MedicationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MedicationFindManyArgs, TData = Array<Prisma.MedicationGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.MedicationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MedicationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MedicationFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MedicationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MedicationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MedicationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MedicationFindUniqueArgs, TData = Prisma.MedicationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MedicationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MedicationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MedicationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MedicationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MedicationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MedicationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MedicationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MedicationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MedicationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MedicationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MedicationGetPayload<T>, Context>) => Promise<Prisma.MedicationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.MedicationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MedicationCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.MedicationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.MedicationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.MedicationCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.MedicationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.MedicationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MedicationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
