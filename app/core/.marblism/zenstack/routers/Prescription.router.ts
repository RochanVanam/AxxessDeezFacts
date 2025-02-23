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

        createMany: procedure.input($Schema.PrescriptionInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prescription.createMany(input as any))),

        create: procedure.input($Schema.PrescriptionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prescription.create(input as any))),

        deleteMany: procedure.input($Schema.PrescriptionInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prescription.deleteMany(input as any))),

        delete: procedure.input($Schema.PrescriptionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prescription.delete(input as any))),

        findFirst: procedure.input($Schema.PrescriptionInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).prescription.findFirst(input as any))),

        findMany: procedure.input($Schema.PrescriptionInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).prescription.findMany(input as any))),

        findUnique: procedure.input($Schema.PrescriptionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).prescription.findUnique(input as any))),

        updateMany: procedure.input($Schema.PrescriptionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prescription.updateMany(input as any))),

        update: procedure.input($Schema.PrescriptionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).prescription.update(input as any))),

        count: procedure.input($Schema.PrescriptionInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).prescription.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PrescriptionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrescriptionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrescriptionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrescriptionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PrescriptionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrescriptionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PrescriptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PrescriptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrescriptionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrescriptionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PrescriptionGetPayload<T>, Context>) => Promise<Prisma.PrescriptionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PrescriptionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrescriptionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrescriptionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrescriptionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PrescriptionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrescriptionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PrescriptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PrescriptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrescriptionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrescriptionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PrescriptionGetPayload<T>, Context>) => Promise<Prisma.PrescriptionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PrescriptionFindFirstArgs, TData = Prisma.PrescriptionGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PrescriptionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PrescriptionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PrescriptionFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PrescriptionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PrescriptionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PrescriptionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PrescriptionFindManyArgs, TData = Array<Prisma.PrescriptionGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PrescriptionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PrescriptionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PrescriptionFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PrescriptionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PrescriptionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PrescriptionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PrescriptionFindUniqueArgs, TData = Prisma.PrescriptionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PrescriptionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PrescriptionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PrescriptionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PrescriptionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PrescriptionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PrescriptionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PrescriptionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrescriptionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrescriptionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrescriptionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PrescriptionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PrescriptionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PrescriptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PrescriptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PrescriptionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PrescriptionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PrescriptionGetPayload<T>, Context>) => Promise<Prisma.PrescriptionGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PrescriptionCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PrescriptionCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PrescriptionCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PrescriptionCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PrescriptionCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PrescriptionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PrescriptionCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PrescriptionCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
