import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type GpsTrackModel = runtime.Types.Result.DefaultSelection<Prisma.$GpsTrackPayload>;
export type AggregateGpsTrack = {
    _count: GpsTrackCountAggregateOutputType | null;
    _avg: GpsTrackAvgAggregateOutputType | null;
    _sum: GpsTrackSumAggregateOutputType | null;
    _min: GpsTrackMinAggregateOutputType | null;
    _max: GpsTrackMaxAggregateOutputType | null;
};
export type GpsTrackAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    heading: number | null;
    accuracy: number | null;
};
export type GpsTrackSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    heading: number | null;
    accuracy: number | null;
};
export type GpsTrackMinAggregateOutputType = {
    id: string | null;
    vehicleId: string | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    heading: number | null;
    accuracy: number | null;
    timestamp: Date | null;
};
export type GpsTrackMaxAggregateOutputType = {
    id: string | null;
    vehicleId: string | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    heading: number | null;
    accuracy: number | null;
    timestamp: Date | null;
};
export type GpsTrackCountAggregateOutputType = {
    id: number;
    vehicleId: number;
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    accuracy: number;
    timestamp: number;
    _all: number;
};
export type GpsTrackAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    speed?: true;
    heading?: true;
    accuracy?: true;
};
export type GpsTrackSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    speed?: true;
    heading?: true;
    accuracy?: true;
};
export type GpsTrackMinAggregateInputType = {
    id?: true;
    vehicleId?: true;
    latitude?: true;
    longitude?: true;
    speed?: true;
    heading?: true;
    accuracy?: true;
    timestamp?: true;
};
export type GpsTrackMaxAggregateInputType = {
    id?: true;
    vehicleId?: true;
    latitude?: true;
    longitude?: true;
    speed?: true;
    heading?: true;
    accuracy?: true;
    timestamp?: true;
};
export type GpsTrackCountAggregateInputType = {
    id?: true;
    vehicleId?: true;
    latitude?: true;
    longitude?: true;
    speed?: true;
    heading?: true;
    accuracy?: true;
    timestamp?: true;
    _all?: true;
};
export type GpsTrackAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GpsTrackWhereInput;
    orderBy?: Prisma.GpsTrackOrderByWithRelationInput | Prisma.GpsTrackOrderByWithRelationInput[];
    cursor?: Prisma.GpsTrackWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GpsTrackCountAggregateInputType;
    _avg?: GpsTrackAvgAggregateInputType;
    _sum?: GpsTrackSumAggregateInputType;
    _min?: GpsTrackMinAggregateInputType;
    _max?: GpsTrackMaxAggregateInputType;
};
export type GetGpsTrackAggregateType<T extends GpsTrackAggregateArgs> = {
    [P in keyof T & keyof AggregateGpsTrack]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGpsTrack[P]> : Prisma.GetScalarType<T[P], AggregateGpsTrack[P]>;
};
export type GpsTrackGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GpsTrackWhereInput;
    orderBy?: Prisma.GpsTrackOrderByWithAggregationInput | Prisma.GpsTrackOrderByWithAggregationInput[];
    by: Prisma.GpsTrackScalarFieldEnum[] | Prisma.GpsTrackScalarFieldEnum;
    having?: Prisma.GpsTrackScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GpsTrackCountAggregateInputType | true;
    _avg?: GpsTrackAvgAggregateInputType;
    _sum?: GpsTrackSumAggregateInputType;
    _min?: GpsTrackMinAggregateInputType;
    _max?: GpsTrackMaxAggregateInputType;
};
export type GpsTrackGroupByOutputType = {
    id: string;
    vehicleId: string;
    latitude: number;
    longitude: number;
    speed: number | null;
    heading: number | null;
    accuracy: number | null;
    timestamp: Date;
    _count: GpsTrackCountAggregateOutputType | null;
    _avg: GpsTrackAvgAggregateOutputType | null;
    _sum: GpsTrackSumAggregateOutputType | null;
    _min: GpsTrackMinAggregateOutputType | null;
    _max: GpsTrackMaxAggregateOutputType | null;
};
export type GetGpsTrackGroupByPayload<T extends GpsTrackGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GpsTrackGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GpsTrackGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GpsTrackGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GpsTrackGroupByOutputType[P]>;
}>>;
export type GpsTrackWhereInput = {
    AND?: Prisma.GpsTrackWhereInput | Prisma.GpsTrackWhereInput[];
    OR?: Prisma.GpsTrackWhereInput[];
    NOT?: Prisma.GpsTrackWhereInput | Prisma.GpsTrackWhereInput[];
    id?: Prisma.StringFilter<"GpsTrack"> | string;
    vehicleId?: Prisma.StringFilter<"GpsTrack"> | string;
    latitude?: Prisma.FloatFilter<"GpsTrack"> | number;
    longitude?: Prisma.FloatFilter<"GpsTrack"> | number;
    speed?: Prisma.FloatNullableFilter<"GpsTrack"> | number | null;
    heading?: Prisma.FloatNullableFilter<"GpsTrack"> | number | null;
    accuracy?: Prisma.FloatNullableFilter<"GpsTrack"> | number | null;
    timestamp?: Prisma.DateTimeFilter<"GpsTrack"> | Date | string;
    vehicle?: Prisma.XOR<Prisma.VehicleScalarRelationFilter, Prisma.VehicleWhereInput>;
};
export type GpsTrackOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    heading?: Prisma.SortOrderInput | Prisma.SortOrder;
    accuracy?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    vehicle?: Prisma.VehicleOrderByWithRelationInput;
};
export type GpsTrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GpsTrackWhereInput | Prisma.GpsTrackWhereInput[];
    OR?: Prisma.GpsTrackWhereInput[];
    NOT?: Prisma.GpsTrackWhereInput | Prisma.GpsTrackWhereInput[];
    vehicleId?: Prisma.StringFilter<"GpsTrack"> | string;
    latitude?: Prisma.FloatFilter<"GpsTrack"> | number;
    longitude?: Prisma.FloatFilter<"GpsTrack"> | number;
    speed?: Prisma.FloatNullableFilter<"GpsTrack"> | number | null;
    heading?: Prisma.FloatNullableFilter<"GpsTrack"> | number | null;
    accuracy?: Prisma.FloatNullableFilter<"GpsTrack"> | number | null;
    timestamp?: Prisma.DateTimeFilter<"GpsTrack"> | Date | string;
    vehicle?: Prisma.XOR<Prisma.VehicleScalarRelationFilter, Prisma.VehicleWhereInput>;
}, "id">;
export type GpsTrackOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrderInput | Prisma.SortOrder;
    heading?: Prisma.SortOrderInput | Prisma.SortOrder;
    accuracy?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    _count?: Prisma.GpsTrackCountOrderByAggregateInput;
    _avg?: Prisma.GpsTrackAvgOrderByAggregateInput;
    _max?: Prisma.GpsTrackMaxOrderByAggregateInput;
    _min?: Prisma.GpsTrackMinOrderByAggregateInput;
    _sum?: Prisma.GpsTrackSumOrderByAggregateInput;
};
export type GpsTrackScalarWhereWithAggregatesInput = {
    AND?: Prisma.GpsTrackScalarWhereWithAggregatesInput | Prisma.GpsTrackScalarWhereWithAggregatesInput[];
    OR?: Prisma.GpsTrackScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GpsTrackScalarWhereWithAggregatesInput | Prisma.GpsTrackScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GpsTrack"> | string;
    vehicleId?: Prisma.StringWithAggregatesFilter<"GpsTrack"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"GpsTrack"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"GpsTrack"> | number;
    speed?: Prisma.FloatNullableWithAggregatesFilter<"GpsTrack"> | number | null;
    heading?: Prisma.FloatNullableWithAggregatesFilter<"GpsTrack"> | number | null;
    accuracy?: Prisma.FloatNullableWithAggregatesFilter<"GpsTrack"> | number | null;
    timestamp?: Prisma.DateTimeWithAggregatesFilter<"GpsTrack"> | Date | string;
};
export type GpsTrackCreateInput = {
    id?: string;
    latitude: number;
    longitude: number;
    speed?: number | null;
    heading?: number | null;
    accuracy?: number | null;
    timestamp?: Date | string;
    vehicle: Prisma.VehicleCreateNestedOneWithoutGpsTracksInput;
};
export type GpsTrackUncheckedCreateInput = {
    id?: string;
    vehicleId: string;
    latitude: number;
    longitude: number;
    speed?: number | null;
    heading?: number | null;
    accuracy?: number | null;
    timestamp?: Date | string;
};
export type GpsTrackUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicle?: Prisma.VehicleUpdateOneRequiredWithoutGpsTracksNestedInput;
};
export type GpsTrackUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GpsTrackCreateManyInput = {
    id?: string;
    vehicleId: string;
    latitude: number;
    longitude: number;
    speed?: number | null;
    heading?: number | null;
    accuracy?: number | null;
    timestamp?: Date | string;
};
export type GpsTrackUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GpsTrackUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GpsTrackListRelationFilter = {
    every?: Prisma.GpsTrackWhereInput;
    some?: Prisma.GpsTrackWhereInput;
    none?: Prisma.GpsTrackWhereInput;
};
export type GpsTrackOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GpsTrackCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type GpsTrackAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
};
export type GpsTrackMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type GpsTrackMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type GpsTrackSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    accuracy?: Prisma.SortOrder;
};
export type GpsTrackCreateNestedManyWithoutVehicleInput = {
    create?: Prisma.XOR<Prisma.GpsTrackCreateWithoutVehicleInput, Prisma.GpsTrackUncheckedCreateWithoutVehicleInput> | Prisma.GpsTrackCreateWithoutVehicleInput[] | Prisma.GpsTrackUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.GpsTrackCreateOrConnectWithoutVehicleInput | Prisma.GpsTrackCreateOrConnectWithoutVehicleInput[];
    createMany?: Prisma.GpsTrackCreateManyVehicleInputEnvelope;
    connect?: Prisma.GpsTrackWhereUniqueInput | Prisma.GpsTrackWhereUniqueInput[];
};
export type GpsTrackUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: Prisma.XOR<Prisma.GpsTrackCreateWithoutVehicleInput, Prisma.GpsTrackUncheckedCreateWithoutVehicleInput> | Prisma.GpsTrackCreateWithoutVehicleInput[] | Prisma.GpsTrackUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.GpsTrackCreateOrConnectWithoutVehicleInput | Prisma.GpsTrackCreateOrConnectWithoutVehicleInput[];
    createMany?: Prisma.GpsTrackCreateManyVehicleInputEnvelope;
    connect?: Prisma.GpsTrackWhereUniqueInput | Prisma.GpsTrackWhereUniqueInput[];
};
export type GpsTrackUpdateManyWithoutVehicleNestedInput = {
    create?: Prisma.XOR<Prisma.GpsTrackCreateWithoutVehicleInput, Prisma.GpsTrackUncheckedCreateWithoutVehicleInput> | Prisma.GpsTrackCreateWithoutVehicleInput[] | Prisma.GpsTrackUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.GpsTrackCreateOrConnectWithoutVehicleInput | Prisma.GpsTrackCreateOrConnectWithoutVehicleInput[];
    upsert?: Prisma.GpsTrackUpsertWithWhereUniqueWithoutVehicleInput | Prisma.GpsTrackUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: Prisma.GpsTrackCreateManyVehicleInputEnvelope;
    set?: Prisma.GpsTrackWhereUniqueInput | Prisma.GpsTrackWhereUniqueInput[];
    disconnect?: Prisma.GpsTrackWhereUniqueInput | Prisma.GpsTrackWhereUniqueInput[];
    delete?: Prisma.GpsTrackWhereUniqueInput | Prisma.GpsTrackWhereUniqueInput[];
    connect?: Prisma.GpsTrackWhereUniqueInput | Prisma.GpsTrackWhereUniqueInput[];
    update?: Prisma.GpsTrackUpdateWithWhereUniqueWithoutVehicleInput | Prisma.GpsTrackUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: Prisma.GpsTrackUpdateManyWithWhereWithoutVehicleInput | Prisma.GpsTrackUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: Prisma.GpsTrackScalarWhereInput | Prisma.GpsTrackScalarWhereInput[];
};
export type GpsTrackUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: Prisma.XOR<Prisma.GpsTrackCreateWithoutVehicleInput, Prisma.GpsTrackUncheckedCreateWithoutVehicleInput> | Prisma.GpsTrackCreateWithoutVehicleInput[] | Prisma.GpsTrackUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.GpsTrackCreateOrConnectWithoutVehicleInput | Prisma.GpsTrackCreateOrConnectWithoutVehicleInput[];
    upsert?: Prisma.GpsTrackUpsertWithWhereUniqueWithoutVehicleInput | Prisma.GpsTrackUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: Prisma.GpsTrackCreateManyVehicleInputEnvelope;
    set?: Prisma.GpsTrackWhereUniqueInput | Prisma.GpsTrackWhereUniqueInput[];
    disconnect?: Prisma.GpsTrackWhereUniqueInput | Prisma.GpsTrackWhereUniqueInput[];
    delete?: Prisma.GpsTrackWhereUniqueInput | Prisma.GpsTrackWhereUniqueInput[];
    connect?: Prisma.GpsTrackWhereUniqueInput | Prisma.GpsTrackWhereUniqueInput[];
    update?: Prisma.GpsTrackUpdateWithWhereUniqueWithoutVehicleInput | Prisma.GpsTrackUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: Prisma.GpsTrackUpdateManyWithWhereWithoutVehicleInput | Prisma.GpsTrackUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: Prisma.GpsTrackScalarWhereInput | Prisma.GpsTrackScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type GpsTrackCreateWithoutVehicleInput = {
    id?: string;
    latitude: number;
    longitude: number;
    speed?: number | null;
    heading?: number | null;
    accuracy?: number | null;
    timestamp?: Date | string;
};
export type GpsTrackUncheckedCreateWithoutVehicleInput = {
    id?: string;
    latitude: number;
    longitude: number;
    speed?: number | null;
    heading?: number | null;
    accuracy?: number | null;
    timestamp?: Date | string;
};
export type GpsTrackCreateOrConnectWithoutVehicleInput = {
    where: Prisma.GpsTrackWhereUniqueInput;
    create: Prisma.XOR<Prisma.GpsTrackCreateWithoutVehicleInput, Prisma.GpsTrackUncheckedCreateWithoutVehicleInput>;
};
export type GpsTrackCreateManyVehicleInputEnvelope = {
    data: Prisma.GpsTrackCreateManyVehicleInput | Prisma.GpsTrackCreateManyVehicleInput[];
    skipDuplicates?: boolean;
};
export type GpsTrackUpsertWithWhereUniqueWithoutVehicleInput = {
    where: Prisma.GpsTrackWhereUniqueInput;
    update: Prisma.XOR<Prisma.GpsTrackUpdateWithoutVehicleInput, Prisma.GpsTrackUncheckedUpdateWithoutVehicleInput>;
    create: Prisma.XOR<Prisma.GpsTrackCreateWithoutVehicleInput, Prisma.GpsTrackUncheckedCreateWithoutVehicleInput>;
};
export type GpsTrackUpdateWithWhereUniqueWithoutVehicleInput = {
    where: Prisma.GpsTrackWhereUniqueInput;
    data: Prisma.XOR<Prisma.GpsTrackUpdateWithoutVehicleInput, Prisma.GpsTrackUncheckedUpdateWithoutVehicleInput>;
};
export type GpsTrackUpdateManyWithWhereWithoutVehicleInput = {
    where: Prisma.GpsTrackScalarWhereInput;
    data: Prisma.XOR<Prisma.GpsTrackUpdateManyMutationInput, Prisma.GpsTrackUncheckedUpdateManyWithoutVehicleInput>;
};
export type GpsTrackScalarWhereInput = {
    AND?: Prisma.GpsTrackScalarWhereInput | Prisma.GpsTrackScalarWhereInput[];
    OR?: Prisma.GpsTrackScalarWhereInput[];
    NOT?: Prisma.GpsTrackScalarWhereInput | Prisma.GpsTrackScalarWhereInput[];
    id?: Prisma.StringFilter<"GpsTrack"> | string;
    vehicleId?: Prisma.StringFilter<"GpsTrack"> | string;
    latitude?: Prisma.FloatFilter<"GpsTrack"> | number;
    longitude?: Prisma.FloatFilter<"GpsTrack"> | number;
    speed?: Prisma.FloatNullableFilter<"GpsTrack"> | number | null;
    heading?: Prisma.FloatNullableFilter<"GpsTrack"> | number | null;
    accuracy?: Prisma.FloatNullableFilter<"GpsTrack"> | number | null;
    timestamp?: Prisma.DateTimeFilter<"GpsTrack"> | Date | string;
};
export type GpsTrackCreateManyVehicleInput = {
    id?: string;
    latitude: number;
    longitude: number;
    speed?: number | null;
    heading?: number | null;
    accuracy?: number | null;
    timestamp?: Date | string;
};
export type GpsTrackUpdateWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GpsTrackUncheckedUpdateWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GpsTrackUncheckedUpdateManyWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    heading?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    accuracy?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GpsTrackSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehicleId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    speed?: boolean;
    heading?: boolean;
    accuracy?: boolean;
    timestamp?: boolean;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gpsTrack"]>;
export type GpsTrackSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehicleId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    speed?: boolean;
    heading?: boolean;
    accuracy?: boolean;
    timestamp?: boolean;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gpsTrack"]>;
export type GpsTrackSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehicleId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    speed?: boolean;
    heading?: boolean;
    accuracy?: boolean;
    timestamp?: boolean;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gpsTrack"]>;
export type GpsTrackSelectScalar = {
    id?: boolean;
    vehicleId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    speed?: boolean;
    heading?: boolean;
    accuracy?: boolean;
    timestamp?: boolean;
};
export type GpsTrackOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "vehicleId" | "latitude" | "longitude" | "speed" | "heading" | "accuracy" | "timestamp", ExtArgs["result"]["gpsTrack"]>;
export type GpsTrackInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
};
export type GpsTrackIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
};
export type GpsTrackIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
};
export type $GpsTrackPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GpsTrack";
    objects: {
        vehicle: Prisma.$VehiclePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        vehicleId: string;
        latitude: number;
        longitude: number;
        speed: number | null;
        heading: number | null;
        accuracy: number | null;
        timestamp: Date;
    }, ExtArgs["result"]["gpsTrack"]>;
    composites: {};
};
export type GpsTrackGetPayload<S extends boolean | null | undefined | GpsTrackDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload, S>;
export type GpsTrackCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GpsTrackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GpsTrackCountAggregateInputType | true;
};
export interface GpsTrackDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GpsTrack'];
        meta: {
            name: 'GpsTrack';
        };
    };
    findUnique<T extends GpsTrackFindUniqueArgs>(args: Prisma.SelectSubset<T, GpsTrackFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GpsTrackClient<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GpsTrackFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GpsTrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GpsTrackClient<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GpsTrackFindFirstArgs>(args?: Prisma.SelectSubset<T, GpsTrackFindFirstArgs<ExtArgs>>): Prisma.Prisma__GpsTrackClient<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GpsTrackFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GpsTrackFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GpsTrackClient<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GpsTrackFindManyArgs>(args?: Prisma.SelectSubset<T, GpsTrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GpsTrackCreateArgs>(args: Prisma.SelectSubset<T, GpsTrackCreateArgs<ExtArgs>>): Prisma.Prisma__GpsTrackClient<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GpsTrackCreateManyArgs>(args?: Prisma.SelectSubset<T, GpsTrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GpsTrackCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GpsTrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GpsTrackDeleteArgs>(args: Prisma.SelectSubset<T, GpsTrackDeleteArgs<ExtArgs>>): Prisma.Prisma__GpsTrackClient<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GpsTrackUpdateArgs>(args: Prisma.SelectSubset<T, GpsTrackUpdateArgs<ExtArgs>>): Prisma.Prisma__GpsTrackClient<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GpsTrackDeleteManyArgs>(args?: Prisma.SelectSubset<T, GpsTrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GpsTrackUpdateManyArgs>(args: Prisma.SelectSubset<T, GpsTrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GpsTrackUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GpsTrackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GpsTrackUpsertArgs>(args: Prisma.SelectSubset<T, GpsTrackUpsertArgs<ExtArgs>>): Prisma.Prisma__GpsTrackClient<runtime.Types.Result.GetResult<Prisma.$GpsTrackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GpsTrackCountArgs>(args?: Prisma.Subset<T, GpsTrackCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GpsTrackCountAggregateOutputType> : number>;
    aggregate<T extends GpsTrackAggregateArgs>(args: Prisma.Subset<T, GpsTrackAggregateArgs>): Prisma.PrismaPromise<GetGpsTrackAggregateType<T>>;
    groupBy<T extends GpsTrackGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GpsTrackGroupByArgs['orderBy'];
    } : {
        orderBy?: GpsTrackGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GpsTrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGpsTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GpsTrackFieldRefs;
}
export interface Prisma__GpsTrackClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vehicle<T extends Prisma.VehicleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VehicleDefaultArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GpsTrackFieldRefs {
    readonly id: Prisma.FieldRef<"GpsTrack", 'String'>;
    readonly vehicleId: Prisma.FieldRef<"GpsTrack", 'String'>;
    readonly latitude: Prisma.FieldRef<"GpsTrack", 'Float'>;
    readonly longitude: Prisma.FieldRef<"GpsTrack", 'Float'>;
    readonly speed: Prisma.FieldRef<"GpsTrack", 'Float'>;
    readonly heading: Prisma.FieldRef<"GpsTrack", 'Float'>;
    readonly accuracy: Prisma.FieldRef<"GpsTrack", 'Float'>;
    readonly timestamp: Prisma.FieldRef<"GpsTrack", 'DateTime'>;
}
export type GpsTrackFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelect<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    include?: Prisma.GpsTrackInclude<ExtArgs> | null;
    where: Prisma.GpsTrackWhereUniqueInput;
};
export type GpsTrackFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelect<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    include?: Prisma.GpsTrackInclude<ExtArgs> | null;
    where: Prisma.GpsTrackWhereUniqueInput;
};
export type GpsTrackFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelect<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    include?: Prisma.GpsTrackInclude<ExtArgs> | null;
    where?: Prisma.GpsTrackWhereInput;
    orderBy?: Prisma.GpsTrackOrderByWithRelationInput | Prisma.GpsTrackOrderByWithRelationInput[];
    cursor?: Prisma.GpsTrackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GpsTrackScalarFieldEnum | Prisma.GpsTrackScalarFieldEnum[];
};
export type GpsTrackFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelect<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    include?: Prisma.GpsTrackInclude<ExtArgs> | null;
    where?: Prisma.GpsTrackWhereInput;
    orderBy?: Prisma.GpsTrackOrderByWithRelationInput | Prisma.GpsTrackOrderByWithRelationInput[];
    cursor?: Prisma.GpsTrackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GpsTrackScalarFieldEnum | Prisma.GpsTrackScalarFieldEnum[];
};
export type GpsTrackFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelect<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    include?: Prisma.GpsTrackInclude<ExtArgs> | null;
    where?: Prisma.GpsTrackWhereInput;
    orderBy?: Prisma.GpsTrackOrderByWithRelationInput | Prisma.GpsTrackOrderByWithRelationInput[];
    cursor?: Prisma.GpsTrackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GpsTrackScalarFieldEnum | Prisma.GpsTrackScalarFieldEnum[];
};
export type GpsTrackCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelect<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    include?: Prisma.GpsTrackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GpsTrackCreateInput, Prisma.GpsTrackUncheckedCreateInput>;
};
export type GpsTrackCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GpsTrackCreateManyInput | Prisma.GpsTrackCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GpsTrackCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    data: Prisma.GpsTrackCreateManyInput | Prisma.GpsTrackCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GpsTrackIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GpsTrackUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelect<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    include?: Prisma.GpsTrackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GpsTrackUpdateInput, Prisma.GpsTrackUncheckedUpdateInput>;
    where: Prisma.GpsTrackWhereUniqueInput;
};
export type GpsTrackUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GpsTrackUpdateManyMutationInput, Prisma.GpsTrackUncheckedUpdateManyInput>;
    where?: Prisma.GpsTrackWhereInput;
    limit?: number;
};
export type GpsTrackUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GpsTrackUpdateManyMutationInput, Prisma.GpsTrackUncheckedUpdateManyInput>;
    where?: Prisma.GpsTrackWhereInput;
    limit?: number;
    include?: Prisma.GpsTrackIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GpsTrackUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelect<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    include?: Prisma.GpsTrackInclude<ExtArgs> | null;
    where: Prisma.GpsTrackWhereUniqueInput;
    create: Prisma.XOR<Prisma.GpsTrackCreateInput, Prisma.GpsTrackUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GpsTrackUpdateInput, Prisma.GpsTrackUncheckedUpdateInput>;
};
export type GpsTrackDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelect<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    include?: Prisma.GpsTrackInclude<ExtArgs> | null;
    where: Prisma.GpsTrackWhereUniqueInput;
};
export type GpsTrackDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GpsTrackWhereInput;
    limit?: number;
};
export type GpsTrackDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GpsTrackSelect<ExtArgs> | null;
    omit?: Prisma.GpsTrackOmit<ExtArgs> | null;
    include?: Prisma.GpsTrackInclude<ExtArgs> | null;
};
