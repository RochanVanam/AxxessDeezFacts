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

        createMany: procedure.input($Schema.PatientInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).patient.createMany(input as any))),

        create: procedure.input($Schema.PatientInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).patient.create(input as any))),

        deleteMany: procedure.input($Schema.PatientInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).patient.deleteMany(input as any))),

        delete: procedure.input($Schema.PatientInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).patient.delete(input as any))),

        findFirst: procedure.input($Schema.PatientInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).patient.findFirst(input as any))),

        findMany: procedure.input($Schema.PatientInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).patient.findMany(input as any))),

        findUnique: procedure.input($Schema.PatientInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).patient.findUnique(input as any))),

        updateMany: procedure.input($Schema.PatientInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).patient.updateMany(input as any))),

        update: procedure.input($Schema.PatientInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).patient.update(input as any))),

        count: procedure.input($Schema.PatientInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).patient.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PatientCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PatientCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PatientCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PatientCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PatientCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PatientCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PatientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PatientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PatientCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PatientCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PatientGetPayload<T>, Context>) => Promise<Prisma.PatientGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PatientDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PatientDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PatientDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PatientDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PatientDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PatientDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PatientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PatientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PatientDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PatientDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PatientGetPayload<T>, Context>) => Promise<Prisma.PatientGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PatientFindFirstArgs, TData = Prisma.PatientGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PatientFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PatientGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PatientFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PatientFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PatientGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PatientGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PatientFindManyArgs, TData = Array<Prisma.PatientGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PatientFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PatientGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PatientFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PatientFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PatientGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PatientGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PatientFindUniqueArgs, TData = Prisma.PatientGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PatientFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PatientGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PatientFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PatientFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PatientGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PatientGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PatientUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PatientUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PatientUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PatientUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PatientUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PatientUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PatientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PatientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PatientUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PatientUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PatientGetPayload<T>, Context>) => Promise<Prisma.PatientGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PatientCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PatientCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PatientCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PatientCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PatientCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PatientCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PatientCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PatientCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
