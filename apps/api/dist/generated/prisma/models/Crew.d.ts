import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CrewModel = runtime.Types.Result.DefaultSelection<Prisma.$CrewPayload>;
export type AggregateCrew = {
    _count: CrewCountAggregateOutputType | null;
    _min: CrewMinAggregateOutputType | null;
    _max: CrewMaxAggregateOutputType | null;
};
export type CrewMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    vehicleId: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CrewMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    vehicleId: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CrewCountAggregateOutputType = {
    id: number;
    name: number;
    vehicleId: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CrewMinAggregateInputType = {
    id?: true;
    name?: true;
    vehicleId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CrewMaxAggregateInputType = {
    id?: true;
    name?: true;
    vehicleId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CrewCountAggregateInputType = {
    id?: true;
    name?: true;
    vehicleId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CrewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CrewWhereInput;
    orderBy?: Prisma.CrewOrderByWithRelationInput | Prisma.CrewOrderByWithRelationInput[];
    cursor?: Prisma.CrewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CrewCountAggregateInputType;
    _min?: CrewMinAggregateInputType;
    _max?: CrewMaxAggregateInputType;
};
export type GetCrewAggregateType<T extends CrewAggregateArgs> = {
    [P in keyof T & keyof AggregateCrew]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCrew[P]> : Prisma.GetScalarType<T[P], AggregateCrew[P]>;
};
export type CrewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CrewWhereInput;
    orderBy?: Prisma.CrewOrderByWithAggregationInput | Prisma.CrewOrderByWithAggregationInput[];
    by: Prisma.CrewScalarFieldEnum[] | Prisma.CrewScalarFieldEnum;
    having?: Prisma.CrewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CrewCountAggregateInputType | true;
    _min?: CrewMinAggregateInputType;
    _max?: CrewMaxAggregateInputType;
};
export type CrewGroupByOutputType = {
    id: string;
    name: string;
    vehicleId: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CrewCountAggregateOutputType | null;
    _min: CrewMinAggregateOutputType | null;
    _max: CrewMaxAggregateOutputType | null;
};
export type GetCrewGroupByPayload<T extends CrewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CrewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CrewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CrewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CrewGroupByOutputType[P]>;
}>>;
export type CrewWhereInput = {
    AND?: Prisma.CrewWhereInput | Prisma.CrewWhereInput[];
    OR?: Prisma.CrewWhereInput[];
    NOT?: Prisma.CrewWhereInput | Prisma.CrewWhereInput[];
    id?: Prisma.StringFilter<"Crew"> | string;
    name?: Prisma.StringFilter<"Crew"> | string;
    vehicleId?: Prisma.StringFilter<"Crew"> | string;
    isActive?: Prisma.BoolFilter<"Crew"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Crew"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Crew"> | Date | string;
    vehicle?: Prisma.XOR<Prisma.VehicleScalarRelationFilter, Prisma.VehicleWhereInput>;
    members?: Prisma.CrewMemberListRelationFilter;
    missions?: Prisma.MissionListRelationFilter;
};
export type CrewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    vehicle?: Prisma.VehicleOrderByWithRelationInput;
    members?: Prisma.CrewMemberOrderByRelationAggregateInput;
    missions?: Prisma.MissionOrderByRelationAggregateInput;
};
export type CrewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CrewWhereInput | Prisma.CrewWhereInput[];
    OR?: Prisma.CrewWhereInput[];
    NOT?: Prisma.CrewWhereInput | Prisma.CrewWhereInput[];
    name?: Prisma.StringFilter<"Crew"> | string;
    vehicleId?: Prisma.StringFilter<"Crew"> | string;
    isActive?: Prisma.BoolFilter<"Crew"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Crew"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Crew"> | Date | string;
    vehicle?: Prisma.XOR<Prisma.VehicleScalarRelationFilter, Prisma.VehicleWhereInput>;
    members?: Prisma.CrewMemberListRelationFilter;
    missions?: Prisma.MissionListRelationFilter;
}, "id">;
export type CrewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CrewCountOrderByAggregateInput;
    _max?: Prisma.CrewMaxOrderByAggregateInput;
    _min?: Prisma.CrewMinOrderByAggregateInput;
};
export type CrewScalarWhereWithAggregatesInput = {
    AND?: Prisma.CrewScalarWhereWithAggregatesInput | Prisma.CrewScalarWhereWithAggregatesInput[];
    OR?: Prisma.CrewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CrewScalarWhereWithAggregatesInput | Prisma.CrewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Crew"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Crew"> | string;
    vehicleId?: Prisma.StringWithAggregatesFilter<"Crew"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Crew"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Crew"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Crew"> | Date | string;
};
export type CrewCreateInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vehicle: Prisma.VehicleCreateNestedOneWithoutCrewsInput;
    members?: Prisma.CrewMemberCreateNestedManyWithoutCrewInput;
    missions?: Prisma.MissionCreateNestedManyWithoutCrewInput;
};
export type CrewUncheckedCreateInput = {
    id?: string;
    name: string;
    vehicleId: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.CrewMemberUncheckedCreateNestedManyWithoutCrewInput;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutCrewInput;
};
export type CrewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicle?: Prisma.VehicleUpdateOneRequiredWithoutCrewsNestedInput;
    members?: Prisma.CrewMemberUpdateManyWithoutCrewNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutCrewNestedInput;
};
export type CrewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.CrewMemberUncheckedUpdateManyWithoutCrewNestedInput;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutCrewNestedInput;
};
export type CrewCreateManyInput = {
    id?: string;
    name: string;
    vehicleId: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CrewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CrewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CrewListRelationFilter = {
    every?: Prisma.CrewWhereInput;
    some?: Prisma.CrewWhereInput;
    none?: Prisma.CrewWhereInput;
};
export type CrewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CrewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CrewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CrewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CrewScalarRelationFilter = {
    is?: Prisma.CrewWhereInput;
    isNot?: Prisma.CrewWhereInput;
};
export type CrewNullableScalarRelationFilter = {
    is?: Prisma.CrewWhereInput | null;
    isNot?: Prisma.CrewWhereInput | null;
};
export type CrewCreateNestedManyWithoutVehicleInput = {
    create?: Prisma.XOR<Prisma.CrewCreateWithoutVehicleInput, Prisma.CrewUncheckedCreateWithoutVehicleInput> | Prisma.CrewCreateWithoutVehicleInput[] | Prisma.CrewUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.CrewCreateOrConnectWithoutVehicleInput | Prisma.CrewCreateOrConnectWithoutVehicleInput[];
    createMany?: Prisma.CrewCreateManyVehicleInputEnvelope;
    connect?: Prisma.CrewWhereUniqueInput | Prisma.CrewWhereUniqueInput[];
};
export type CrewUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: Prisma.XOR<Prisma.CrewCreateWithoutVehicleInput, Prisma.CrewUncheckedCreateWithoutVehicleInput> | Prisma.CrewCreateWithoutVehicleInput[] | Prisma.CrewUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.CrewCreateOrConnectWithoutVehicleInput | Prisma.CrewCreateOrConnectWithoutVehicleInput[];
    createMany?: Prisma.CrewCreateManyVehicleInputEnvelope;
    connect?: Prisma.CrewWhereUniqueInput | Prisma.CrewWhereUniqueInput[];
};
export type CrewUpdateManyWithoutVehicleNestedInput = {
    create?: Prisma.XOR<Prisma.CrewCreateWithoutVehicleInput, Prisma.CrewUncheckedCreateWithoutVehicleInput> | Prisma.CrewCreateWithoutVehicleInput[] | Prisma.CrewUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.CrewCreateOrConnectWithoutVehicleInput | Prisma.CrewCreateOrConnectWithoutVehicleInput[];
    upsert?: Prisma.CrewUpsertWithWhereUniqueWithoutVehicleInput | Prisma.CrewUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: Prisma.CrewCreateManyVehicleInputEnvelope;
    set?: Prisma.CrewWhereUniqueInput | Prisma.CrewWhereUniqueInput[];
    disconnect?: Prisma.CrewWhereUniqueInput | Prisma.CrewWhereUniqueInput[];
    delete?: Prisma.CrewWhereUniqueInput | Prisma.CrewWhereUniqueInput[];
    connect?: Prisma.CrewWhereUniqueInput | Prisma.CrewWhereUniqueInput[];
    update?: Prisma.CrewUpdateWithWhereUniqueWithoutVehicleInput | Prisma.CrewUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: Prisma.CrewUpdateManyWithWhereWithoutVehicleInput | Prisma.CrewUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: Prisma.CrewScalarWhereInput | Prisma.CrewScalarWhereInput[];
};
export type CrewUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: Prisma.XOR<Prisma.CrewCreateWithoutVehicleInput, Prisma.CrewUncheckedCreateWithoutVehicleInput> | Prisma.CrewCreateWithoutVehicleInput[] | Prisma.CrewUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.CrewCreateOrConnectWithoutVehicleInput | Prisma.CrewCreateOrConnectWithoutVehicleInput[];
    upsert?: Prisma.CrewUpsertWithWhereUniqueWithoutVehicleInput | Prisma.CrewUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: Prisma.CrewCreateManyVehicleInputEnvelope;
    set?: Prisma.CrewWhereUniqueInput | Prisma.CrewWhereUniqueInput[];
    disconnect?: Prisma.CrewWhereUniqueInput | Prisma.CrewWhereUniqueInput[];
    delete?: Prisma.CrewWhereUniqueInput | Prisma.CrewWhereUniqueInput[];
    connect?: Prisma.CrewWhereUniqueInput | Prisma.CrewWhereUniqueInput[];
    update?: Prisma.CrewUpdateWithWhereUniqueWithoutVehicleInput | Prisma.CrewUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: Prisma.CrewUpdateManyWithWhereWithoutVehicleInput | Prisma.CrewUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: Prisma.CrewScalarWhereInput | Prisma.CrewScalarWhereInput[];
};
export type CrewCreateNestedOneWithoutMembersInput = {
    create?: Prisma.XOR<Prisma.CrewCreateWithoutMembersInput, Prisma.CrewUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.CrewCreateOrConnectWithoutMembersInput;
    connect?: Prisma.CrewWhereUniqueInput;
};
export type CrewUpdateOneRequiredWithoutMembersNestedInput = {
    create?: Prisma.XOR<Prisma.CrewCreateWithoutMembersInput, Prisma.CrewUncheckedCreateWithoutMembersInput>;
    connectOrCreate?: Prisma.CrewCreateOrConnectWithoutMembersInput;
    upsert?: Prisma.CrewUpsertWithoutMembersInput;
    connect?: Prisma.CrewWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CrewUpdateToOneWithWhereWithoutMembersInput, Prisma.CrewUpdateWithoutMembersInput>, Prisma.CrewUncheckedUpdateWithoutMembersInput>;
};
export type CrewCreateNestedOneWithoutMissionsInput = {
    create?: Prisma.XOR<Prisma.CrewCreateWithoutMissionsInput, Prisma.CrewUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.CrewCreateOrConnectWithoutMissionsInput;
    connect?: Prisma.CrewWhereUniqueInput;
};
export type CrewUpdateOneWithoutMissionsNestedInput = {
    create?: Prisma.XOR<Prisma.CrewCreateWithoutMissionsInput, Prisma.CrewUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.CrewCreateOrConnectWithoutMissionsInput;
    upsert?: Prisma.CrewUpsertWithoutMissionsInput;
    disconnect?: Prisma.CrewWhereInput | boolean;
    delete?: Prisma.CrewWhereInput | boolean;
    connect?: Prisma.CrewWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CrewUpdateToOneWithWhereWithoutMissionsInput, Prisma.CrewUpdateWithoutMissionsInput>, Prisma.CrewUncheckedUpdateWithoutMissionsInput>;
};
export type CrewCreateWithoutVehicleInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.CrewMemberCreateNestedManyWithoutCrewInput;
    missions?: Prisma.MissionCreateNestedManyWithoutCrewInput;
};
export type CrewUncheckedCreateWithoutVehicleInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.CrewMemberUncheckedCreateNestedManyWithoutCrewInput;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutCrewInput;
};
export type CrewCreateOrConnectWithoutVehicleInput = {
    where: Prisma.CrewWhereUniqueInput;
    create: Prisma.XOR<Prisma.CrewCreateWithoutVehicleInput, Prisma.CrewUncheckedCreateWithoutVehicleInput>;
};
export type CrewCreateManyVehicleInputEnvelope = {
    data: Prisma.CrewCreateManyVehicleInput | Prisma.CrewCreateManyVehicleInput[];
    skipDuplicates?: boolean;
};
export type CrewUpsertWithWhereUniqueWithoutVehicleInput = {
    where: Prisma.CrewWhereUniqueInput;
    update: Prisma.XOR<Prisma.CrewUpdateWithoutVehicleInput, Prisma.CrewUncheckedUpdateWithoutVehicleInput>;
    create: Prisma.XOR<Prisma.CrewCreateWithoutVehicleInput, Prisma.CrewUncheckedCreateWithoutVehicleInput>;
};
export type CrewUpdateWithWhereUniqueWithoutVehicleInput = {
    where: Prisma.CrewWhereUniqueInput;
    data: Prisma.XOR<Prisma.CrewUpdateWithoutVehicleInput, Prisma.CrewUncheckedUpdateWithoutVehicleInput>;
};
export type CrewUpdateManyWithWhereWithoutVehicleInput = {
    where: Prisma.CrewScalarWhereInput;
    data: Prisma.XOR<Prisma.CrewUpdateManyMutationInput, Prisma.CrewUncheckedUpdateManyWithoutVehicleInput>;
};
export type CrewScalarWhereInput = {
    AND?: Prisma.CrewScalarWhereInput | Prisma.CrewScalarWhereInput[];
    OR?: Prisma.CrewScalarWhereInput[];
    NOT?: Prisma.CrewScalarWhereInput | Prisma.CrewScalarWhereInput[];
    id?: Prisma.StringFilter<"Crew"> | string;
    name?: Prisma.StringFilter<"Crew"> | string;
    vehicleId?: Prisma.StringFilter<"Crew"> | string;
    isActive?: Prisma.BoolFilter<"Crew"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Crew"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Crew"> | Date | string;
};
export type CrewCreateWithoutMembersInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vehicle: Prisma.VehicleCreateNestedOneWithoutCrewsInput;
    missions?: Prisma.MissionCreateNestedManyWithoutCrewInput;
};
export type CrewUncheckedCreateWithoutMembersInput = {
    id?: string;
    name: string;
    vehicleId: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    missions?: Prisma.MissionUncheckedCreateNestedManyWithoutCrewInput;
};
export type CrewCreateOrConnectWithoutMembersInput = {
    where: Prisma.CrewWhereUniqueInput;
    create: Prisma.XOR<Prisma.CrewCreateWithoutMembersInput, Prisma.CrewUncheckedCreateWithoutMembersInput>;
};
export type CrewUpsertWithoutMembersInput = {
    update: Prisma.XOR<Prisma.CrewUpdateWithoutMembersInput, Prisma.CrewUncheckedUpdateWithoutMembersInput>;
    create: Prisma.XOR<Prisma.CrewCreateWithoutMembersInput, Prisma.CrewUncheckedCreateWithoutMembersInput>;
    where?: Prisma.CrewWhereInput;
};
export type CrewUpdateToOneWithWhereWithoutMembersInput = {
    where?: Prisma.CrewWhereInput;
    data: Prisma.XOR<Prisma.CrewUpdateWithoutMembersInput, Prisma.CrewUncheckedUpdateWithoutMembersInput>;
};
export type CrewUpdateWithoutMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicle?: Prisma.VehicleUpdateOneRequiredWithoutCrewsNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutCrewNestedInput;
};
export type CrewUncheckedUpdateWithoutMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutCrewNestedInput;
};
export type CrewCreateWithoutMissionsInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vehicle: Prisma.VehicleCreateNestedOneWithoutCrewsInput;
    members?: Prisma.CrewMemberCreateNestedManyWithoutCrewInput;
};
export type CrewUncheckedCreateWithoutMissionsInput = {
    id?: string;
    name: string;
    vehicleId: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    members?: Prisma.CrewMemberUncheckedCreateNestedManyWithoutCrewInput;
};
export type CrewCreateOrConnectWithoutMissionsInput = {
    where: Prisma.CrewWhereUniqueInput;
    create: Prisma.XOR<Prisma.CrewCreateWithoutMissionsInput, Prisma.CrewUncheckedCreateWithoutMissionsInput>;
};
export type CrewUpsertWithoutMissionsInput = {
    update: Prisma.XOR<Prisma.CrewUpdateWithoutMissionsInput, Prisma.CrewUncheckedUpdateWithoutMissionsInput>;
    create: Prisma.XOR<Prisma.CrewCreateWithoutMissionsInput, Prisma.CrewUncheckedCreateWithoutMissionsInput>;
    where?: Prisma.CrewWhereInput;
};
export type CrewUpdateToOneWithWhereWithoutMissionsInput = {
    where?: Prisma.CrewWhereInput;
    data: Prisma.XOR<Prisma.CrewUpdateWithoutMissionsInput, Prisma.CrewUncheckedUpdateWithoutMissionsInput>;
};
export type CrewUpdateWithoutMissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicle?: Prisma.VehicleUpdateOneRequiredWithoutCrewsNestedInput;
    members?: Prisma.CrewMemberUpdateManyWithoutCrewNestedInput;
};
export type CrewUncheckedUpdateWithoutMissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.CrewMemberUncheckedUpdateManyWithoutCrewNestedInput;
};
export type CrewCreateManyVehicleInput = {
    id?: string;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CrewUpdateWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.CrewMemberUpdateManyWithoutCrewNestedInput;
    missions?: Prisma.MissionUpdateManyWithoutCrewNestedInput;
};
export type CrewUncheckedUpdateWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    members?: Prisma.CrewMemberUncheckedUpdateManyWithoutCrewNestedInput;
    missions?: Prisma.MissionUncheckedUpdateManyWithoutCrewNestedInput;
};
export type CrewUncheckedUpdateManyWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CrewCountOutputType = {
    members: number;
    missions: number;
};
export type CrewCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    members?: boolean | CrewCountOutputTypeCountMembersArgs;
    missions?: boolean | CrewCountOutputTypeCountMissionsArgs;
};
export type CrewCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewCountOutputTypeSelect<ExtArgs> | null;
};
export type CrewCountOutputTypeCountMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CrewMemberWhereInput;
};
export type CrewCountOutputTypeCountMissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MissionWhereInput;
};
export type CrewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    vehicleId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
    members?: boolean | Prisma.Crew$membersArgs<ExtArgs>;
    missions?: boolean | Prisma.Crew$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CrewCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["crew"]>;
export type CrewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    vehicleId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["crew"]>;
export type CrewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    vehicleId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["crew"]>;
export type CrewSelectScalar = {
    id?: boolean;
    name?: boolean;
    vehicleId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CrewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "vehicleId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["crew"]>;
export type CrewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
    members?: boolean | Prisma.Crew$membersArgs<ExtArgs>;
    missions?: boolean | Prisma.Crew$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.CrewCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CrewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
};
export type CrewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
};
export type $CrewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Crew";
    objects: {
        vehicle: Prisma.$VehiclePayload<ExtArgs>;
        members: Prisma.$CrewMemberPayload<ExtArgs>[];
        missions: Prisma.$MissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        vehicleId: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["crew"]>;
    composites: {};
};
export type CrewGetPayload<S extends boolean | null | undefined | CrewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CrewPayload, S>;
export type CrewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CrewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CrewCountAggregateInputType | true;
};
export interface CrewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Crew'];
        meta: {
            name: 'Crew';
        };
    };
    findUnique<T extends CrewFindUniqueArgs>(args: Prisma.SelectSubset<T, CrewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CrewClient<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CrewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CrewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CrewClient<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CrewFindFirstArgs>(args?: Prisma.SelectSubset<T, CrewFindFirstArgs<ExtArgs>>): Prisma.Prisma__CrewClient<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CrewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CrewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CrewClient<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CrewFindManyArgs>(args?: Prisma.SelectSubset<T, CrewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CrewCreateArgs>(args: Prisma.SelectSubset<T, CrewCreateArgs<ExtArgs>>): Prisma.Prisma__CrewClient<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CrewCreateManyArgs>(args?: Prisma.SelectSubset<T, CrewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CrewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CrewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CrewDeleteArgs>(args: Prisma.SelectSubset<T, CrewDeleteArgs<ExtArgs>>): Prisma.Prisma__CrewClient<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CrewUpdateArgs>(args: Prisma.SelectSubset<T, CrewUpdateArgs<ExtArgs>>): Prisma.Prisma__CrewClient<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CrewDeleteManyArgs>(args?: Prisma.SelectSubset<T, CrewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CrewUpdateManyArgs>(args: Prisma.SelectSubset<T, CrewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CrewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CrewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CrewUpsertArgs>(args: Prisma.SelectSubset<T, CrewUpsertArgs<ExtArgs>>): Prisma.Prisma__CrewClient<runtime.Types.Result.GetResult<Prisma.$CrewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CrewCountArgs>(args?: Prisma.Subset<T, CrewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CrewCountAggregateOutputType> : number>;
    aggregate<T extends CrewAggregateArgs>(args: Prisma.Subset<T, CrewAggregateArgs>): Prisma.PrismaPromise<GetCrewAggregateType<T>>;
    groupBy<T extends CrewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CrewGroupByArgs['orderBy'];
    } : {
        orderBy?: CrewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CrewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCrewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CrewFieldRefs;
}
export interface Prisma__CrewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vehicle<T extends Prisma.VehicleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VehicleDefaultArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    members<T extends Prisma.Crew$membersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Crew$membersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CrewMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    missions<T extends Prisma.Crew$missionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Crew$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CrewFieldRefs {
    readonly id: Prisma.FieldRef<"Crew", 'String'>;
    readonly name: Prisma.FieldRef<"Crew", 'String'>;
    readonly vehicleId: Prisma.FieldRef<"Crew", 'String'>;
    readonly isActive: Prisma.FieldRef<"Crew", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Crew", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Crew", 'DateTime'>;
}
export type CrewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
    where: Prisma.CrewWhereUniqueInput;
};
export type CrewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
    where: Prisma.CrewWhereUniqueInput;
};
export type CrewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
    where?: Prisma.CrewWhereInput;
    orderBy?: Prisma.CrewOrderByWithRelationInput | Prisma.CrewOrderByWithRelationInput[];
    cursor?: Prisma.CrewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CrewScalarFieldEnum | Prisma.CrewScalarFieldEnum[];
};
export type CrewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
    where?: Prisma.CrewWhereInput;
    orderBy?: Prisma.CrewOrderByWithRelationInput | Prisma.CrewOrderByWithRelationInput[];
    cursor?: Prisma.CrewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CrewScalarFieldEnum | Prisma.CrewScalarFieldEnum[];
};
export type CrewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
    where?: Prisma.CrewWhereInput;
    orderBy?: Prisma.CrewOrderByWithRelationInput | Prisma.CrewOrderByWithRelationInput[];
    cursor?: Prisma.CrewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CrewScalarFieldEnum | Prisma.CrewScalarFieldEnum[];
};
export type CrewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CrewCreateInput, Prisma.CrewUncheckedCreateInput>;
};
export type CrewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CrewCreateManyInput | Prisma.CrewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CrewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    data: Prisma.CrewCreateManyInput | Prisma.CrewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CrewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CrewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CrewUpdateInput, Prisma.CrewUncheckedUpdateInput>;
    where: Prisma.CrewWhereUniqueInput;
};
export type CrewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CrewUpdateManyMutationInput, Prisma.CrewUncheckedUpdateManyInput>;
    where?: Prisma.CrewWhereInput;
    limit?: number;
};
export type CrewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CrewUpdateManyMutationInput, Prisma.CrewUncheckedUpdateManyInput>;
    where?: Prisma.CrewWhereInput;
    limit?: number;
    include?: Prisma.CrewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CrewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
    where: Prisma.CrewWhereUniqueInput;
    create: Prisma.XOR<Prisma.CrewCreateInput, Prisma.CrewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CrewUpdateInput, Prisma.CrewUncheckedUpdateInput>;
};
export type CrewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
    where: Prisma.CrewWhereUniqueInput;
};
export type CrewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CrewWhereInput;
    limit?: number;
};
export type Crew$membersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Crew$missionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MissionSelect<ExtArgs> | null;
    omit?: Prisma.MissionOmit<ExtArgs> | null;
    include?: Prisma.MissionInclude<ExtArgs> | null;
    where?: Prisma.MissionWhereInput;
    orderBy?: Prisma.MissionOrderByWithRelationInput | Prisma.MissionOrderByWithRelationInput[];
    cursor?: Prisma.MissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MissionScalarFieldEnum | Prisma.MissionScalarFieldEnum[];
};
export type CrewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CrewSelect<ExtArgs> | null;
    omit?: Prisma.CrewOmit<ExtArgs> | null;
    include?: Prisma.CrewInclude<ExtArgs> | null;
};
