import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CrewMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$CrewMemberPayload>;
export type AggregateCrewMember = {
    _count: CrewMemberCountAggregateOutputType | null;
    _min: CrewMemberMinAggregateOutputType | null;
    _max: CrewMemberMaxAggregateOutputType | null;
};
export type CrewMemberMinAggregateOutputType = {
    id: string | null;
    crewId: string | null;
    userId: string | null;
    role: string | null;
    createdAt: Date | null;
};
export type CrewMemberMaxAggregateOutputType = {
    id: string | null;
    crewId: string | null;
    userId: string | null;
    role: string | null;
    createdAt: Date | null;
};
export type CrewMemberCountAggregateOutputType = {
    id: number;
    crewId: number;
    userId: number;
    role: number;
    createdAt: number;
    _all: number;
};
export type CrewMemberMinAggregateInputType = {
    id?: true;
    crewId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
};
export type CrewMemberMaxAggregateInputType = {
    id?: true;
    crewId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
};
export type CrewMemberCountAggregateInputType = {
    id?: true;
    crewId?: true;
    userId?: true;
    role?: true;
    createdAt?: true;
    _all?: true;
};
export type CrewMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CrewMemberWhereInput;
    orderBy?: Prisma.CrewMemberOrderByWithRelationInput | Prisma.CrewMemberOrderByWithRelationInput[];
    cursor?: Prisma.CrewMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CrewMemberCountAggregateInputType;
    _min?: CrewMemberMinAggregateInputType;
    _max?: CrewMemberMaxAggregateInputType;
};
export type GetCrewMemberAggregateType<T extends CrewMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateCrewMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCrewMember[P]> : Prisma.GetScalarType<T[P], AggregateCrewMember[P]>;
};
export type CrewMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CrewMemberWhereInput;
    orderBy?: Prisma.CrewMemberOrderByWithAggregationInput | Prisma.CrewMemberOrderByWithAggregationInput[];
    by: Prisma.CrewMemberScalarFieldEnum[] | Prisma.CrewMemberScalarFieldEnum;
    having?: Prisma.CrewMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CrewMemberCountAggregateInputType | true;
    _min?: CrewMemberMinAggregateInputType;
    _max?: CrewMemberMaxAggregateInputType;
};
export type CrewMemberGroupByOutputType = {
    id: string;
    crewId: string;
    userId: string;
    role: string;
    createdAt: Date;
    _count: CrewMemberCountAggregateOutputType | null;
    _min: CrewMemberMinAggregateOutputType | null;
    _max: CrewMemberMaxAggregateOutputType | null;
};
export type GetCrewMemberGroupByPayload<T extends CrewMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CrewMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CrewMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CrewMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CrewMemberGroupByOutputType[P]>;
}>>;
export type CrewMemberWhereInput = {
    AND?: Prisma.CrewMemberWhereInput | Prisma.CrewMemberWhereInput[];
    OR?: Prisma.CrewMemberWhereInput[];
    NOT?: Prisma.CrewMemberWhereInput | Prisma.CrewMemberWhereInput[];
    id?: Prisma.StringFilter<"CrewMember"> | string;
    crewId?: Prisma.StringFilter<"CrewMember"> | string;
    userId?: Prisma.StringFilter<"CrewMember"> | string;
    role?: Prisma.StringFilter<"CrewMember"> | string;
    createdAt?: Prisma.DateTimeFilter<"CrewMember"> | Date | string;
    crew?: Prisma.XOR<Prisma.CrewScalarRelationFilter, Prisma.CrewWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CrewMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    crewId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    crew?: Prisma.CrewOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type CrewMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CrewMemberWhereInput | Prisma.CrewMemberWhereInput[];
    OR?: Prisma.CrewMemberWhereInput[];
    NOT?: Prisma.CrewMemberWhereInput | Prisma.CrewMemberWhereInput[];
    crewId?: Prisma.StringFilter<"CrewMember"> | string;
    userId?: Prisma.StringFilter<"CrewMember"> | string;
    role?: Prisma.StringFilter<"CrewMember"> | string;
    createdAt?: Prisma.DateTimeFilter<"CrewMember"> | Date | string;
    crew?: Prisma.XOR<Prisma.CrewScalarRelationFilter, Prisma.CrewWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type CrewMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    crewId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CrewMemberCountOrderByAggregateInput;
    _max?: Prisma.CrewMemberMaxOrderByAggregateInput;
    _min?: Prisma.CrewMemberMinOrderByAggregateInput;
};
export type CrewMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.CrewMemberScalarWhereWithAggregatesInput | Prisma.CrewMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.CrewMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CrewMemberScalarWhereWithAggregatesInput | Prisma.CrewMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CrewMember"> | string;
    crewId?: Prisma.StringWithAggregatesFilter<"CrewMember"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"CrewMember"> | string;
    role?: Prisma.StringWithAggregatesFilter<"CrewMember"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CrewMember"> | Date | string;
};
export type CrewMemberCreateInput = {
    id?: string;
    role: string;
    createdAt?: Date | string;
    crew: Prisma.CrewCreateNestedOneWithoutMembersInput;
    user: Prisma.UserCreateNestedOneWithoutCrewMembersInput;
};
export type CrewMemberUncheckedCreateInput = {
    id?: string;
    crewId: string;
    userId: string;
    role: string;
    createdAt?: Date | string;
};
export type CrewMemberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    crew?: Prisma.CrewUpdateOneRequiredWithoutMembersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCrewMembersNestedInput;
};
export type CrewMemberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    crewId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CrewMemberCreateManyInput = {
    id?: string;
    crewId: string;
    userId: string;
    role: string;
    createdAt?: Date | string;
};
export type CrewMemberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CrewMemberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    crewId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CrewMemberListRelationFilter = {
    every?: Prisma.CrewMemberWhereInput;
    some?: Prisma.CrewMemberWhereInput;
    none?: Prisma.CrewMemberWhereInput;
};
export type CrewMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CrewMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    crewId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CrewMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    crewId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CrewMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    crewId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CrewMemberCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CrewMemberCreateWithoutUserInput, Prisma.CrewMemberUncheckedCreateWithoutUserInput> | Prisma.CrewMemberCreateWithoutUserInput[] | Prisma.CrewMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CrewMemberCreateOrConnectWithoutUserInput | Prisma.CrewMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CrewMemberCreateManyUserInputEnvelope;
    connect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
};
export type CrewMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CrewMemberCreateWithoutUserInput, Prisma.CrewMemberUncheckedCreateWithoutUserInput> | Prisma.CrewMemberCreateWithoutUserInput[] | Prisma.CrewMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CrewMemberCreateOrConnectWithoutUserInput | Prisma.CrewMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CrewMemberCreateManyUserInputEnvelope;
    connect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
};
export type CrewMemberUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CrewMemberCreateWithoutUserInput, Prisma.CrewMemberUncheckedCreateWithoutUserInput> | Prisma.CrewMemberCreateWithoutUserInput[] | Prisma.CrewMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CrewMemberCreateOrConnectWithoutUserInput | Prisma.CrewMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CrewMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.CrewMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CrewMemberCreateManyUserInputEnvelope;
    set?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    disconnect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    delete?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    connect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    update?: Prisma.CrewMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.CrewMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CrewMemberUpdateManyWithWhereWithoutUserInput | Prisma.CrewMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CrewMemberScalarWhereInput | Prisma.CrewMemberScalarWhereInput[];
};
export type CrewMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CrewMemberCreateWithoutUserInput, Prisma.CrewMemberUncheckedCreateWithoutUserInput> | Prisma.CrewMemberCreateWithoutUserInput[] | Prisma.CrewMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CrewMemberCreateOrConnectWithoutUserInput | Prisma.CrewMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CrewMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.CrewMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CrewMemberCreateManyUserInputEnvelope;
    set?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    disconnect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    delete?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    connect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    update?: Prisma.CrewMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.CrewMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CrewMemberUpdateManyWithWhereWithoutUserInput | Prisma.CrewMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CrewMemberScalarWhereInput | Prisma.CrewMemberScalarWhereInput[];
};
export type CrewMemberCreateNestedManyWithoutCrewInput = {
    create?: Prisma.XOR<Prisma.CrewMemberCreateWithoutCrewInput, Prisma.CrewMemberUncheckedCreateWithoutCrewInput> | Prisma.CrewMemberCreateWithoutCrewInput[] | Prisma.CrewMemberUncheckedCreateWithoutCrewInput[];
    connectOrCreate?: Prisma.CrewMemberCreateOrConnectWithoutCrewInput | Prisma.CrewMemberCreateOrConnectWithoutCrewInput[];
    createMany?: Prisma.CrewMemberCreateManyCrewInputEnvelope;
    connect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
};
export type CrewMemberUncheckedCreateNestedManyWithoutCrewInput = {
    create?: Prisma.XOR<Prisma.CrewMemberCreateWithoutCrewInput, Prisma.CrewMemberUncheckedCreateWithoutCrewInput> | Prisma.CrewMemberCreateWithoutCrewInput[] | Prisma.CrewMemberUncheckedCreateWithoutCrewInput[];
    connectOrCreate?: Prisma.CrewMemberCreateOrConnectWithoutCrewInput | Prisma.CrewMemberCreateOrConnectWithoutCrewInput[];
    createMany?: Prisma.CrewMemberCreateManyCrewInputEnvelope;
    connect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
};
export type CrewMemberUpdateManyWithoutCrewNestedInput = {
    create?: Prisma.XOR<Prisma.CrewMemberCreateWithoutCrewInput, Prisma.CrewMemberUncheckedCreateWithoutCrewInput> | Prisma.CrewMemberCreateWithoutCrewInput[] | Prisma.CrewMemberUncheckedCreateWithoutCrewInput[];
    connectOrCreate?: Prisma.CrewMemberCreateOrConnectWithoutCrewInput | Prisma.CrewMemberCreateOrConnectWithoutCrewInput[];
    upsert?: Prisma.CrewMemberUpsertWithWhereUniqueWithoutCrewInput | Prisma.CrewMemberUpsertWithWhereUniqueWithoutCrewInput[];
    createMany?: Prisma.CrewMemberCreateManyCrewInputEnvelope;
    set?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    disconnect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    delete?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    connect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    update?: Prisma.CrewMemberUpdateWithWhereUniqueWithoutCrewInput | Prisma.CrewMemberUpdateWithWhereUniqueWithoutCrewInput[];
    updateMany?: Prisma.CrewMemberUpdateManyWithWhereWithoutCrewInput | Prisma.CrewMemberUpdateManyWithWhereWithoutCrewInput[];
    deleteMany?: Prisma.CrewMemberScalarWhereInput | Prisma.CrewMemberScalarWhereInput[];
};
export type CrewMemberUncheckedUpdateManyWithoutCrewNestedInput = {
    create?: Prisma.XOR<Prisma.CrewMemberCreateWithoutCrewInput, Prisma.CrewMemberUncheckedCreateWithoutCrewInput> | Prisma.CrewMemberCreateWithoutCrewInput[] | Prisma.CrewMemberUncheckedCreateWithoutCrewInput[];
    connectOrCreate?: Prisma.CrewMemberCreateOrConnectWithoutCrewInput | Prisma.CrewMemberCreateOrConnectWithoutCrewInput[];
    upsert?: Prisma.CrewMemberUpsertWithWhereUniqueWithoutCrewInput | Prisma.CrewMemberUpsertWithWhereUniqueWithoutCrewInput[];
    createMany?: Prisma.CrewMemberCreateManyCrewInputEnvelope;
    set?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    disconnect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    delete?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    connect?: Prisma.CrewMemberWhereUniqueInput | Prisma.CrewMemberWhereUniqueInput[];
    update?: Prisma.CrewMemberUpdateWithWhereUniqueWithoutCrewInput | Prisma.CrewMemberUpdateWithWhereUniqueWithoutCrewInput[];
    updateMany?: Prisma.CrewMemberUpdateManyWithWhereWithoutCrewInput | Prisma.CrewMemberUpdateManyWithWhereWithoutCrewInput[];
    deleteMany?: Prisma.CrewMemberScalarWhereInput | Prisma.CrewMemberScalarWhereInput[];
};
export type CrewMemberCreateWithoutUserInput = {
    id?: string;
    role: string;
    createdAt?: Date | string;
    crew: Prisma.CrewCreateNestedOneWithoutMembersInput;
};
export type CrewMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    crewId: string;
    role: string;
    createdAt?: Date | string;
};
export type CrewMemberCreateOrConnectWithoutUserInput = {
    where: Prisma.CrewMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.CrewMemberCreateWithoutUserInput, Prisma.CrewMemberUncheckedCreateWithoutUserInput>;
};
export type CrewMemberCreateManyUserInputEnvelope = {
    data: Prisma.CrewMemberCreateManyUserInput | Prisma.CrewMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CrewMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CrewMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.CrewMemberUpdateWithoutUserInput, Prisma.CrewMemberUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CrewMemberCreateWithoutUserInput, Prisma.CrewMemberUncheckedCreateWithoutUserInput>;
};
export type CrewMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CrewMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.CrewMemberUpdateWithoutUserInput, Prisma.CrewMemberUncheckedUpdateWithoutUserInput>;
};
export type CrewMemberUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CrewMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.CrewMemberUpdateManyMutationInput, Prisma.CrewMemberUncheckedUpdateManyWithoutUserInput>;
};
export type CrewMemberScalarWhereInput = {
    AND?: Prisma.CrewMemberScalarWhereInput | Prisma.CrewMemberScalarWhereInput[];
    OR?: Prisma.CrewMemberScalarWhereInput[];
    NOT?: Prisma.CrewMemberScalarWhereInput | Prisma.CrewMemberScalarWhereInput[];
    id?: Prisma.StringFilter<"CrewMember"> | string;
    crewId?: Prisma.StringFilter<"CrewMember"> | string;
    userId?: Prisma.StringFilter<"CrewMember"> | string;
    role?: Prisma.StringFilter<"CrewMember"> | string;
    createdAt?: Prisma.DateTimeFilter<"CrewMember"> | Date | string;
};
export type CrewMemberCreateWithoutCrewInput = {
    id?: string;
    role: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCrewMembersInput;
};
export type CrewMemberUncheckedCreateWithoutCrewInput = {
    id?: string;
    userId: string;
    role: string;
    createdAt?: Date | string;
};
export type CrewMemberCreateOrConnectWithoutCrewInput = {
    where: Prisma.CrewMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.CrewMemberCreateWithoutCrewInput, Prisma.CrewMemberUncheckedCreateWithoutCrewInput>;
};
export type CrewMemberCreateManyCrewInputEnvelope = {
    data: Prisma.CrewMemberCreateManyCrewInput | Prisma.CrewMemberCreateManyCrewInput[];
    skipDuplicates?: boolean;
};
export type CrewMemberUpsertWithWhereUniqueWithoutCrewInput = {
    where: Prisma.CrewMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.CrewMemberUpdateWithoutCrewInput, Prisma.CrewMemberUncheckedUpdateWithoutCrewInput>;
    create: Prisma.XOR<Prisma.CrewMemberCreateWithoutCrewInput, Prisma.CrewMemberUncheckedCreateWithoutCrewInput>;
};
export type CrewMemberUpdateWithWhereUniqueWithoutCrewInput = {
    where: Prisma.CrewMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.CrewMemberUpdateWithoutCrewInput, Prisma.CrewMemberUncheckedUpdateWithoutCrewInput>;
};
export type CrewMemberUpdateManyWithWhereWithoutCrewInput = {
    where: Prisma.CrewMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.CrewMemberUpdateManyMutationInput, Prisma.CrewMemberUncheckedUpdateManyWithoutCrewInput>;
};
export type CrewMemberCreateManyUserInput = {
    id?: string;
    crewId: string;
    role: string;
    createdAt?: Date | string;
};
export type CrewMemberUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    crew?: Prisma.CrewUpdateOneRequiredWithoutMembersNestedInput;
};
export type CrewMemberUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    crewId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CrewMemberUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    crewId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CrewMemberCreateManyCrewInput = {
    id?: string;
    userId: string;
    role: string;
    createdAt?: Date | string;
};
export type CrewMemberUpdateWithoutCrewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCrewMembersNestedInput;
};
export type CrewMemberUncheckedUpdateWithoutCrewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CrewMemberUncheckedUpdateManyWithoutCrewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CrewMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    crewId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    crew?: boolean | Prisma.CrewDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["crewMember"]>;
export type CrewMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    crewId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    crew?: boolean | Prisma.CrewDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["crewMember"]>;
export type CrewMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    crewId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    crew?: boolean | Prisma.CrewDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["crewMember"]>;
export type CrewMemberSelectScalar = {
    id?: boolean;
    crewId?: boolean;
    userId?: boolean;
    role?: boolean;
    createdAt?: boolean;
};
export type CrewMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "crewId" | "userId" | "role" | "createdAt", ExtArgs["result"]["crewMember"]>;
export type CrewMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    crew?: boolean | Prisma.CrewDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CrewMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    crew?: boolean | Prisma.CrewDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CrewMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    crew?: boolean | Prisma.CrewDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CrewMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CrewMember";
    objects: {
        crew: Prisma.$CrewPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        crewId: string;
        userId: string;
        role: string;
        createdAt: Date;
    }, ExtArgs["result"]["crewMember"]>;
    composites: {};
};
export type CrewMemberGetPayload<S extends boolean | null | undefined | CrewMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload, S>;
export type CrewMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CrewMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CrewMemberCountAggregateInputType | true;
};
export interface CrewMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CrewMember'];
        meta: {
            name: 'CrewMember';
        };
    };
    findUnique<T extends CrewMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, CrewMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CrewMemberClient<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CrewMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CrewMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CrewMemberClient<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CrewMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, CrewMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__CrewMemberClient<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CrewMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CrewMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CrewMemberClient<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CrewMemberFindManyArgs>(args?: Prisma.SelectSubset<T, CrewMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CrewMemberCreateArgs>(args: Prisma.SelectSubset<T, CrewMemberCreateArgs<ExtArgs>>): Prisma.Prisma__CrewMemberClient<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CrewMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, CrewMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CrewMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CrewMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CrewMemberDeleteArgs>(args: Prisma.SelectSubset<T, CrewMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__CrewMemberClient<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CrewMemberUpdateArgs>(args: Prisma.SelectSubset<T, CrewMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__CrewMemberClient<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CrewMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, CrewMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CrewMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, CrewMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CrewMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CrewMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CrewMemberUpsertArgs>(args: Prisma.SelectSubset<T, CrewMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__CrewMemberClient<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CrewMemberCountArgs>(args?: Prisma.Subset<T, CrewMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CrewMemberCountAggregateOutputType> : number>;
    aggregate<T extends CrewMemberAggregateArgs>(args: Prisma.Subset<T, CrewMemberAggregateArgs>): Prisma.PrismaPromise<GetCrewMemberAggregateType<T>>;
    groupBy<T extends CrewMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CrewMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: CrewMemberGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CrewMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrewMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CrewMemberFieldRefs;
}
export interface Prisma__CrewMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    crew<T extends Prisma.CrewDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CrewDefaultArgs<ExtArgs>>): Prisma.Prisma__CrewClient<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CrewMemberFieldRefs {
    readonly id: Prisma.FieldRef<"CrewMember", 'String'>;
    readonly crewId: Prisma.FieldRef<"CrewMember", 'String'>;
    readonly userId: Prisma.FieldRef<"CrewMember", 'String'>;
    readonly role: Prisma.FieldRef<"CrewMember", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CrewMember", 'DateTime'>;
}
export type CrewMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelect<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    include?: Prisma.CrewMemberInclude<ExtArgs> | null;
    where: Prisma.CrewMemberWhereUniqueInput;
};
export type CrewMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelect<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    include?: Prisma.CrewMemberInclude<ExtArgs> | null;
    where: Prisma.CrewMemberWhereUniqueInput;
};
export type CrewMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelect<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    include?: Prisma.CrewMemberInclude<ExtArgs> | null;
    where?: Prisma.CrewMemberWhereInput;
    orderBy?: Prisma.CrewMemberOrderByWithRelationInput | Prisma.CrewMemberOrderByWithRelationInput[];
    cursor?: Prisma.CrewMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CrewMemberScalarFieldEnum | Prisma.CrewMemberScalarFieldEnum[];
};
export type CrewMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelect<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    include?: Prisma.CrewMemberInclude<ExtArgs> | null;
    where?: Prisma.CrewMemberWhereInput;
    orderBy?: Prisma.CrewMemberOrderByWithRelationInput | Prisma.CrewMemberOrderByWithRelationInput[];
    cursor?: Prisma.CrewMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CrewMemberScalarFieldEnum | Prisma.CrewMemberScalarFieldEnum[];
};
export type CrewMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelect<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    include?: Prisma.CrewMemberInclude<ExtArgs> | null;
    where?: Prisma.CrewMemberWhereInput;
    orderBy?: Prisma.CrewMemberOrderByWithRelationInput | Prisma.CrewMemberOrderByWithRelationInput[];
    cursor?: Prisma.CrewMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CrewMemberScalarFieldEnum | Prisma.CrewMemberScalarFieldEnum[];
};
export type CrewMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelect<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    include?: Prisma.CrewMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CrewMemberCreateInput, Prisma.CrewMemberUncheckedCreateInput>;
};
export type CrewMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CrewMemberCreateManyInput | Prisma.CrewMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CrewMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    data: Prisma.CrewMemberCreateManyInput | Prisma.CrewMemberCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CrewMemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CrewMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelect<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    include?: Prisma.CrewMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CrewMemberUpdateInput, Prisma.CrewMemberUncheckedUpdateInput>;
    where: Prisma.CrewMemberWhereUniqueInput;
};
export type CrewMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CrewMemberUpdateManyMutationInput, Prisma.CrewMemberUncheckedUpdateManyInput>;
    where?: Prisma.CrewMemberWhereInput;
    limit?: number;
};
export type CrewMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CrewMemberUpdateManyMutationInput, Prisma.CrewMemberUncheckedUpdateManyInput>;
    where?: Prisma.CrewMemberWhereInput;
    limit?: number;
    include?: Prisma.CrewMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CrewMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelect<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    include?: Prisma.CrewMemberInclude<ExtArgs> | null;
    where: Prisma.CrewMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.CrewMemberCreateInput, Prisma.CrewMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CrewMemberUpdateInput, Prisma.CrewMemberUncheckedUpdateInput>;
};
export type CrewMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelect<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    include?: Prisma.CrewMemberInclude<ExtArgs> | null;
    where: Prisma.CrewMemberWhereUniqueInput;
};
export type CrewMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CrewMemberWhereInput;
    limit?: number;
};
export type CrewMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewMemberSelect<ExtArgs> | null;
    omit?: Prisma.CrewMemberOmit<ExtArgs> | null;
    include?: Prisma.CrewMemberInclude<ExtArgs> | null;
};
