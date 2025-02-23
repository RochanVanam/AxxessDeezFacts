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

        createMany: procedure.input($Schema.HealthLogInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).healthLog.createMany(input as any))),

        create: procedure.input($Schema.HealthLogInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).healthLog.create(input as any))),

        deleteMany: procedure.input($Schema.HealthLogInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).healthLog.deleteMany(input as any))),

        delete: procedure.input($Schema.HealthLogInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).healthLog.delete(input as any))),

        findFirst: procedure.input($Schema.HealthLogInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).healthLog.findFirst(input as any))),

        findMany: procedure.input($Schema.HealthLogInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).healthLog.findMany(input as any))),

        findUnique: procedure.input($Schema.HealthLogInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).healthLog.findUnique(input as any))),

        updateMany: procedure.input($Schema.HealthLogInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).healthLog.updateMany(input as any))),

        update: procedure.input($Schema.HealthLogInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).healthLog.update(input as any))),

        count: procedure.input($Schema.HealthLogInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).healthLog.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.HealthLogCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HealthLogCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HealthLogCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HealthLogCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.HealthLogCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HealthLogCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HealthLogGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HealthLogGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HealthLogCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HealthLogCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HealthLogGetPayload<T>, Context>) => Promise<Prisma.HealthLogGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.HealthLogDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HealthLogDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HealthLogDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HealthLogDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.HealthLogDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HealthLogDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HealthLogGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HealthLogGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HealthLogDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HealthLogDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HealthLogGetPayload<T>, Context>) => Promise<Prisma.HealthLogGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.HealthLogFindFirstArgs, TData = Prisma.HealthLogGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.HealthLogFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HealthLogGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HealthLogFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.HealthLogFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HealthLogGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HealthLogGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.HealthLogFindManyArgs, TData = Array<Prisma.HealthLogGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.HealthLogFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.HealthLogGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HealthLogFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.HealthLogFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.HealthLogGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.HealthLogGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.HealthLogFindUniqueArgs, TData = Prisma.HealthLogGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.HealthLogFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.HealthLogGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.HealthLogFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.HealthLogFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.HealthLogGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.HealthLogGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.HealthLogUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HealthLogUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HealthLogUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HealthLogUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.HealthLogUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.HealthLogUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.HealthLogGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.HealthLogGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.HealthLogUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.HealthLogUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.HealthLogGetPayload<T>, Context>) => Promise<Prisma.HealthLogGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.HealthLogCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.HealthLogCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.HealthLogCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.HealthLogCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.HealthLogCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.HealthLogCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.HealthLogCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.HealthLogCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
