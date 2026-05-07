import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MissionEventModel = runtime.Types.Result.DefaultSelection<Prisma.$MissionEventPayload>;
export type AggregateMissionEvent = {
    _count: MissionEventCountAggregateOutputType | null;
    _min: MissionEventMinAggregateOutputType | null;
    _max: MissionEventMaxAggregateOutputType | null;
};
export type MissionEventMinAggregateOutputType = {
    id: string | null;
    missionId: string | null;
    type: string | null;
    createdAt: Date | null;
};
export type MissionEventMaxAggregateOutputType = {
    id: string | null;
    missionId: string | null;
    type: string | null;
    createdAt: Date | null;
};
export type MissionEventCountAggregateOutputType = {
    id: number;
    missionId: number;
    type: number;
    data: number;
    createdAt: number;
    _all: number;
};
export type MissionEventMinAggregateInputType = {
    id?: true;
    missionId?: true;
    type?: true;
    createdAt?: true;
};
export type MissionEventMaxAggregateInputType = {
    id?: true;
    missionId?: true;
    type?: true;
    createdAt?: true;
};
export type MissionEventCountAggregateInputType = {
    id?: true;
    missionId?: true;
    type?: true;
    data?: true;
    createdAt?: true;
    _all?: true;
};
export type MissionEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionEventWhereInput;
    orderBy?: Prisma.MissionEventOrderByWithRelationInput | Prisma.MissionEventOrderByWithRelationInput[];
    cursor?: Prisma.MissionEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MissionEventCountAggregateInputType;
    _min?: MissionEventMinAggregateInputType;
    _max?: MissionEventMaxAggregateInputType;
};
export type GetMissionEventAggregateType<T extends MissionEventAggregateArgs> = {
    [P in keyof T & keyof AggregateMissionEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMissionEvent[P]> : Prisma.GetScalarType<T[P], AggregateMissionEvent[P]>;
};
export type MissionEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionEventWhereInput;
    orderBy?: Prisma.MissionEventOrderByWithAggregationInput | Prisma.MissionEventOrderByWithAggregationInput[];
    by: Prisma.MissionEventScalarFieldEnum[] | Prisma.MissionEventScalarFieldEnum;
    having?: Prisma.MissionEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MissionEventCountAggregateInputType | true;
    _min?: MissionEventMinAggregateInputType;
    _max?: MissionEventMaxAggregateInputType;
};
export type MissionEventGroupByOutputType = {
    id: string;
    missionId: string;
    type: string;
    data: runtime.JsonValue | null;
    createdAt: Date;
    _count: MissionEventCountAggregateOutputType | null;
    _min: MissionEventMinAggregateOutputType | null;
    _max: MissionEventMaxAggregateOutputType | null;
};
export type GetMissionEventGroupByPayload<T extends MissionEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MissionEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MissionEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MissionEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MissionEventGroupByOutputType[P]>;
}>>;
export type MissionEventWhereInput = {
    AND?: Prisma.MissionEventWhereInput | Prisma.MissionEventWhereInput[];
    OR?: Prisma.MissionEventWhereInput[];
    NOT?: Prisma.MissionEventWhereInput | Prisma.MissionEventWhereInput[];
    id?: Prisma.StringFilter<"MissionEvent"> | string;
    missionId?: Prisma.StringFilter<"MissionEvent"> | string;
    type?: Prisma.StringFilter<"MissionEvent"> | string;
    data?: Prisma.JsonNullableFilter<"MissionEvent">;
    createdAt?: Prisma.DateTimeFilter<"MissionEvent"> | Date | string;
    mission?: Prisma.XOR<Prisma.MissionScalarRelationFilter, Prisma.MissionWhereInput>;
};
export type MissionEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    data?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    mission?: Prisma.MissionOrderByWithRelationInput;
};
export type MissionEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MissionEventWhereInput | Prisma.MissionEventWhereInput[];
    OR?: Prisma.MissionEventWhereInput[];
    NOT?: Prisma.MissionEventWhereInput | Prisma.MissionEventWhereInput[];
    missionId?: Prisma.StringFilter<"MissionEvent"> | string;
    type?: Prisma.StringFilter<"MissionEvent"> | string;
    data?: Prisma.JsonNullableFilter<"MissionEvent">;
    createdAt?: Prisma.DateTimeFilter<"MissionEvent"> | Date | string;
    mission?: Prisma.XOR<Prisma.MissionScalarRelationFilter, Prisma.MissionWhereInput>;
}, "id">;
export type MissionEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    data?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MissionEventCountOrderByAggregateInput;
    _max?: Prisma.MissionEventMaxOrderByAggregateInput;
    _min?: Prisma.MissionEventMinOrderByAggregateInput;
};
export type MissionEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.MissionEventScalarWhereWithAggregatesInput | Prisma.MissionEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.MissionEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MissionEventScalarWhereWithAggregatesInput | Prisma.MissionEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MissionEvent"> | string;
    missionId?: Prisma.StringWithAggregatesFilter<"MissionEvent"> | string;
    type?: Prisma.StringWithAggregatesFilter<"MissionEvent"> | string;
    data?: Prisma.JsonNullableWithAggregatesFilter<"MissionEvent">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MissionEvent"> | Date | string;
};
export type MissionEventCreateInput = {
    id?: string;
    type: string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    mission: Prisma.MissionCreateNestedOneWithoutEventsInput;
};
export type MissionEventUncheckedCreateInput = {
    id?: string;
    missionId: string;
    type: string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type MissionEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mission?: Prisma.MissionUpdateOneRequiredWithoutEventsNestedInput;
};
export type MissionEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    missionId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionEventCreateManyInput = {
    id?: string;
    missionId: string;
    type: string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type MissionEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    missionId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionEventListRelationFilter = {
    every?: Prisma.MissionEventWhereInput;
    some?: Prisma.MissionEventWhereInput;
    none?: Prisma.MissionEventWhereInput;
};
export type MissionEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MissionEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MissionEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MissionEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    missionId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MissionEventCreateNestedManyWithoutMissionInput = {
    create?: Prisma.XOR<Prisma.MissionEventCreateWithoutMissionInput, Prisma.MissionEventUncheckedCreateWithoutMissionInput> | Prisma.MissionEventCreateWithoutMissionInput[] | Prisma.MissionEventUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionEventCreateOrConnectWithoutMissionInput | Prisma.MissionEventCreateOrConnectWithoutMissionInput[];
    createMany?: Prisma.MissionEventCreateManyMissionInputEnvelope;
    connect?: Prisma.MissionEventWhereUniqueInput | Prisma.MissionEventWhereUniqueInput[];
};
export type MissionEventUncheckedCreateNestedManyWithoutMissionInput = {
    create?: Prisma.XOR<Prisma.MissionEventCreateWithoutMissionInput, Prisma.MissionEventUncheckedCreateWithoutMissionInput> | Prisma.MissionEventCreateWithoutMissionInput[] | Prisma.MissionEventUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionEventCreateOrConnectWithoutMissionInput | Prisma.MissionEventCreateOrConnectWithoutMissionInput[];
    createMany?: Prisma.MissionEventCreateManyMissionInputEnvelope;
    connect?: Prisma.MissionEventWhereUniqueInput | Prisma.MissionEventWhereUniqueInput[];
};
export type MissionEventUpdateManyWithoutMissionNestedInput = {
    create?: Prisma.XOR<Prisma.MissionEventCreateWithoutMissionInput, Prisma.MissionEventUncheckedCreateWithoutMissionInput> | Prisma.MissionEventCreateWithoutMissionInput[] | Prisma.MissionEventUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionEventCreateOrConnectWithoutMissionInput | Prisma.MissionEventCreateOrConnectWithoutMissionInput[];
    upsert?: Prisma.MissionEventUpsertWithWhereUniqueWithoutMissionInput | Prisma.MissionEventUpsertWithWhereUniqueWithoutMissionInput[];
    createMany?: Prisma.MissionEventCreateManyMissionInputEnvelope;
    set?: Prisma.MissionEventWhereUniqueInput | Prisma.MissionEventWhereUniqueInput[];
    disconnect?: Prisma.MissionEventWhereUniqueInput | Prisma.MissionEventWhereUniqueInput[];
    delete?: Prisma.MissionEventWhereUniqueInput | Prisma.MissionEventWhereUniqueInput[];
    connect?: Prisma.MissionEventWhereUniqueInput | Prisma.MissionEventWhereUniqueInput[];
    update?: Prisma.MissionEventUpdateWithWhereUniqueWithoutMissionInput | Prisma.MissionEventUpdateWithWhereUniqueWithoutMissionInput[];
    updateMany?: Prisma.MissionEventUpdateManyWithWhereWithoutMissionInput | Prisma.MissionEventUpdateManyWithWhereWithoutMissionInput[];
    deleteMany?: Prisma.MissionEventScalarWhereInput | Prisma.MissionEventScalarWhereInput[];
};
export type MissionEventUncheckedUpdateManyWithoutMissionNestedInput = {
    create?: Prisma.XOR<Prisma.MissionEventCreateWithoutMissionInput, Prisma.MissionEventUncheckedCreateWithoutMissionInput> | Prisma.MissionEventCreateWithoutMissionInput[] | Prisma.MissionEventUncheckedCreateWithoutMissionInput[];
    connectOrCreate?: Prisma.MissionEventCreateOrConnectWithoutMissionInput | Prisma.MissionEventCreateOrConnectWithoutMissionInput[];
    upsert?: Prisma.MissionEventUpsertWithWhereUniqueWithoutMissionInput | Prisma.MissionEventUpsertWithWhereUniqueWithoutMissionInput[];
    createMany?: Prisma.MissionEventCreateManyMissionInputEnvelope;
    set?: Prisma.MissionEventWhereUniqueInput | Prisma.MissionEventWhereUniqueInput[];
    disconnect?: Prisma.MissionEventWhereUniqueInput | Prisma.MissionEventWhereUniqueInput[];
    delete?: Prisma.MissionEventWhereUniqueInput | Prisma.MissionEventWhereUniqueInput[];
    connect?: Prisma.MissionEventWhereUniqueInput | Prisma.MissionEventWhereUniqueInput[];
    update?: Prisma.MissionEventUpdateWithWhereUniqueWithoutMissionInput | Prisma.MissionEventUpdateWithWhereUniqueWithoutMissionInput[];
    updateMany?: Prisma.MissionEventUpdateManyWithWhereWithoutMissionInput | Prisma.MissionEventUpdateManyWithWhereWithoutMissionInput[];
    deleteMany?: Prisma.MissionEventScalarWhereInput | Prisma.MissionEventScalarWhereInput[];
};
export type MissionEventCreateWithoutMissionInput = {
    id?: string;
    type: string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type MissionEventUncheckedCreateWithoutMissionInput = {
    id?: string;
    type: string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type MissionEventCreateOrConnectWithoutMissionInput = {
    where: Prisma.MissionEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionEventCreateWithoutMissionInput, Prisma.MissionEventUncheckedCreateWithoutMissionInput>;
};
export type MissionEventCreateManyMissionInputEnvelope = {
    data: Prisma.MissionEventCreateManyMissionInput | Prisma.MissionEventCreateManyMissionInput[];
    skipDuplicates?: boolean;
};
export type MissionEventUpsertWithWhereUniqueWithoutMissionInput = {
    where: Prisma.MissionEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.MissionEventUpdateWithoutMissionInput, Prisma.MissionEventUncheckedUpdateWithoutMissionInput>;
    create: Prisma.XOR<Prisma.MissionEventCreateWithoutMissionInput, Prisma.MissionEventUncheckedCreateWithoutMissionInput>;
};
export type MissionEventUpdateWithWhereUniqueWithoutMissionInput = {
    where: Prisma.MissionEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.MissionEventUpdateWithoutMissionInput, Prisma.MissionEventUncheckedUpdateWithoutMissionInput>;
};
export type MissionEventUpdateManyWithWhereWithoutMissionInput = {
    where: Prisma.MissionEventScalarWhereInput;
    data: Prisma.XOR<Prisma.MissionEventUpdateManyMutationInput, Prisma.MissionEventUncheckedUpdateManyWithoutMissionInput>;
};
export type MissionEventScalarWhereInput = {
    AND?: Prisma.MissionEventScalarWhereInput | Prisma.MissionEventScalarWhereInput[];
    OR?: Prisma.MissionEventScalarWhereInput[];
    NOT?: Prisma.MissionEventScalarWhereInput | Prisma.MissionEventScalarWhereInput[];
    id?: Prisma.StringFilter<"MissionEvent"> | string;
    missionId?: Prisma.StringFilter<"MissionEvent"> | string;
    type?: Prisma.StringFilter<"MissionEvent"> | string;
    data?: Prisma.JsonNullableFilter<"MissionEvent">;
    createdAt?: Prisma.DateTimeFilter<"MissionEvent"> | Date | string;
};
export type MissionEventCreateManyMissionInput = {
    id?: string;
    type: string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type MissionEventUpdateWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionEventUncheckedUpdateWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionEventUncheckedUpdateManyWithoutMissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MissionEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    missionId?: boolean;
    type?: boolean;
    data?: boolean;
    createdAt?: boolean;
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["missionEvent"]>;
export type MissionEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    missionId?: boolean;
    type?: boolean;
    data?: boolean;
    createdAt?: boolean;
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["missionEvent"]>;
export type MissionEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    missionId?: boolean;
    type?: boolean;
    data?: boolean;
    createdAt?: boolean;
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["missionEvent"]>;
export type MissionEventSelectScalar = {
    id?: boolean;
    missionId?: boolean;
    type?: boolean;
    data?: boolean;
    createdAt?: boolean;
};
export type MissionEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "missionId" | "type" | "data" | "createdAt", ExtArgs["result"]["missionEvent"]>;
export type MissionEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
};
export type MissionEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
};
export type MissionEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mission?: boolean | Prisma.MissionDefaultArgs<ExtArgs>;
};
export type $MissionEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MissionEvent";
    objects: {
        mission: Prisma.$MissionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        missionId: string;
        type: string;
        data: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["missionEvent"]>;
    composites: {};
};
export type MissionEventGetPayload<S extends boolean | null | undefined | MissionEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MissionEventPayload, S>;
export type MissionEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MissionEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MissionEventCountAggregateInputType | true;
};
export interface MissionEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MissionEvent'];
        meta: {
            name: 'MissionEvent';
        };
    };
    findUnique<T extends MissionEventFindUniqueArgs>(args: Prisma.SelectSubset<T, MissionEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MissionEventClient<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MissionEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MissionEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MissionEventClient<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MissionEventFindFirstArgs>(args?: Prisma.SelectSubset<T, MissionEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__MissionEventClient<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MissionEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MissionEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MissionEventClient<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MissionEventFindManyArgs>(args?: Prisma.SelectSubset<T, MissionEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MissionEventCreateArgs>(args: Prisma.SelectSubset<T, MissionEventCreateArgs<ExtArgs>>): Prisma.Prisma__MissionEventClient<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MissionEventCreateManyArgs>(args?: Prisma.SelectSubset<T, MissionEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MissionEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MissionEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MissionEventDeleteArgs>(args: Prisma.SelectSubset<T, MissionEventDeleteArgs<ExtArgs>>): Prisma.Prisma__MissionEventClient<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MissionEventUpdateArgs>(args: Prisma.SelectSubset<T, MissionEventUpdateArgs<ExtArgs>>): Prisma.Prisma__MissionEventClient<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MissionEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, MissionEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MissionEventUpdateManyArgs>(args: Prisma.SelectSubset<T, MissionEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MissionEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MissionEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MissionEventUpsertArgs>(args: Prisma.SelectSubset<T, MissionEventUpsertArgs<ExtArgs>>): Prisma.Prisma__MissionEventClient<runtime.Types.Result.GetResult<Prisma.$MissionEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MissionEventCountArgs>(args?: Prisma.Subset<T, MissionEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MissionEventCountAggregateOutputType> : number>;
    aggregate<T extends MissionEventAggregateArgs>(args: Prisma.Subset<T, MissionEventAggregateArgs>): Prisma.PrismaPromise<GetMissionEventAggregateType<T>>;
    groupBy<T extends MissionEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MissionEventGroupByArgs['orderBy'];
    } : {
        orderBy?: MissionEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MissionEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MissionEventFieldRefs;
}
export interface Prisma__MissionEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    mission<T extends Prisma.MissionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MissionDefaultArgs<ExtArgs>>): Prisma.Prisma__MissionClient<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MissionEventFieldRefs {
    readonly id: Prisma.FieldRef<"MissionEvent", 'String'>;
    readonly missionId: Prisma.FieldRef<"MissionEvent", 'String'>;
    readonly type: Prisma.FieldRef<"MissionEvent", 'String'>;
    readonly data: Prisma.FieldRef<"MissionEvent", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"MissionEvent", 'DateTime'>;
}
export type MissionEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelect<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    include?: Prisma.MissionEventInclude<ExtArgs> | null;
    where: Prisma.MissionEventWhereUniqueInput;
};
export type MissionEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelect<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    include?: Prisma.MissionEventInclude<ExtArgs> | null;
    where: Prisma.MissionEventWhereUniqueInput;
};
export type MissionEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelect<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    include?: Prisma.MissionEventInclude<ExtArgs> | null;
    where?: Prisma.MissionEventWhereInput;
    orderBy?: Prisma.MissionEventOrderByWithRelationInput | Prisma.MissionEventOrderByWithRelationInput[];
    cursor?: Prisma.MissionEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionEventScalarFieldEnum | Prisma.MissionEventScalarFieldEnum[];
};
export type MissionEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelect<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    include?: Prisma.MissionEventInclude<ExtArgs> | null;
    where?: Prisma.MissionEventWhereInput;
    orderBy?: Prisma.MissionEventOrderByWithRelationInput | Prisma.MissionEventOrderByWithRelationInput[];
    cursor?: Prisma.MissionEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionEventScalarFieldEnum | Prisma.MissionEventScalarFieldEnum[];
};
export type MissionEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelect<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    include?: Prisma.MissionEventInclude<ExtArgs> | null;
    where?: Prisma.MissionEventWhereInput;
    orderBy?: Prisma.MissionEventOrderByWithRelationInput | Prisma.MissionEventOrderByWithRelationInput[];
    cursor?: Prisma.MissionEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionEventScalarFieldEnum | Prisma.MissionEventScalarFieldEnum[];
};
export type MissionEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelect<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    include?: Prisma.MissionEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionEventCreateInput, Prisma.MissionEventUncheckedCreateInput>;
};
export type MissionEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MissionEventCreateManyInput | Prisma.MissionEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MissionEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    data: Prisma.MissionEventCreateManyInput | Prisma.MissionEventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MissionEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MissionEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelect<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    include?: Prisma.MissionEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionEventUpdateInput, Prisma.MissionEventUncheckedUpdateInput>;
    where: Prisma.MissionEventWhereUniqueInput;
};
export type MissionEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MissionEventUpdateManyMutationInput, Prisma.MissionEventUncheckedUpdateManyInput>;
    where?: Prisma.MissionEventWhereInput;
    limit?: number;
};
export type MissionEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MissionEventUpdateManyMutationInput, Prisma.MissionEventUncheckedUpdateManyInput>;
    where?: Prisma.MissionEventWhereInput;
    limit?: number;
    include?: Prisma.MissionEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MissionEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelect<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    include?: Prisma.MissionEventInclude<ExtArgs> | null;
    where: Prisma.MissionEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.MissionEventCreateInput, Prisma.MissionEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MissionEventUpdateInput, Prisma.MissionEventUncheckedUpdateInput>;
};
export type MissionEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelect<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    include?: Prisma.MissionEventInclude<ExtArgs> | null;
    where: Prisma.MissionEventWhereUniqueInput;
};
export type MissionEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionEventWhereInput;
    limit?: number;
};
export type MissionEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionEventSelect<ExtArgs> | null;
    omit?: Prisma.MissionEventOmit<ExtArgs> | null;
    include?: Prisma.MissionEventInclude<ExtArgs> | null;
};
