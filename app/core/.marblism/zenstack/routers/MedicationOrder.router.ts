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

        createMany: procedure.input($Schema.MedicationOrderInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medicationOrder.createMany(input as any))),

        create: procedure.input($Schema.MedicationOrderInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medicationOrder.create(input as any))),

        deleteMany: procedure.input($Schema.MedicationOrderInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medicationOrder.deleteMany(input as any))),

        delete: procedure.input($Schema.MedicationOrderInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medicationOrder.delete(input as any))),

        findFirst: procedure.input($Schema.MedicationOrderInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).medicationOrder.findFirst(input as any))),

        findMany: procedure.input($Schema.MedicationOrderInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).medicationOrder.findMany(input as any))),

        findUnique: procedure.input($Schema.MedicationOrderInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).medicationOrder.findUnique(input as any))),

        updateMany: procedure.input($Schema.MedicationOrderInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medicationOrder.updateMany(input as any))),

        update: procedure.input($Schema.MedicationOrderInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).medicationOrder.update(input as any))),

        count: procedure.input($Schema.MedicationOrderInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).medicationOrder.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.MedicationOrderCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationOrderCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationOrderCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationOrderCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.MedicationOrderCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationOrderCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MedicationOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MedicationOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationOrderCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationOrderCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MedicationOrderGetPayload<T>, Context>) => Promise<Prisma.MedicationOrderGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.MedicationOrderDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationOrderDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationOrderDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationOrderDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.MedicationOrderDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationOrderDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MedicationOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MedicationOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationOrderDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationOrderDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MedicationOrderGetPayload<T>, Context>) => Promise<Prisma.MedicationOrderGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.MedicationOrderFindFirstArgs, TData = Prisma.MedicationOrderGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.MedicationOrderFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MedicationOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MedicationOrderFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MedicationOrderFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MedicationOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MedicationOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.MedicationOrderFindManyArgs, TData = Array<Prisma.MedicationOrderGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.MedicationOrderFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.MedicationOrderGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MedicationOrderFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.MedicationOrderFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.MedicationOrderGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.MedicationOrderGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.MedicationOrderFindUniqueArgs, TData = Prisma.MedicationOrderGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.MedicationOrderFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.MedicationOrderGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.MedicationOrderFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.MedicationOrderFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.MedicationOrderGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.MedicationOrderGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.MedicationOrderUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationOrderUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationOrderUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationOrderUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.MedicationOrderUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.MedicationOrderUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.MedicationOrderGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.MedicationOrderGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.MedicationOrderUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.MedicationOrderUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.MedicationOrderGetPayload<T>, Context>) => Promise<Prisma.MedicationOrderGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.MedicationOrderCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MedicationOrderCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.MedicationOrderCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.MedicationOrderCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.MedicationOrderCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.MedicationOrderCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.MedicationOrderCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.MedicationOrderCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
