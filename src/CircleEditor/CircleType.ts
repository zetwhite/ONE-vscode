/*
 * Copyright (c) 2022 Samsung Electronics Co., Ltd. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable @typescript-eslint/naming-convention*/
import * as Circle from "./circle_schema_generated";

/**
 * BuiltinOptionsType with uppercase to resolve naming convention conflict.
 */
export enum BuiltinOptionsType {
  NONE = Circle.BuiltinOptions.NONE,
  CONV2DOPTIONS = Circle.BuiltinOptions.Conv2DOptions,
  DEPTHWISECONV2DOPTIONS = Circle.BuiltinOptions.DepthwiseConv2DOptions,
  CONCATEMBEDDINGSOPTIONS = Circle.BuiltinOptions.ConcatEmbeddingsOptions,
  LSHPROJECTIONOPTIONS = Circle.BuiltinOptions.LSHProjectionOptions,
  POOL2DOPTIONS = Circle.BuiltinOptions.Pool2DOptions,
  SVDFOPTIONS = Circle.BuiltinOptions.SVDFOptions,
  RNNOPTIONS = Circle.BuiltinOptions.RNNOptions,
  FULLYCONNECTEDOPTIONS = Circle.BuiltinOptions.FullyConnectedOptions,
  SOFTMAXOPTIONS = Circle.BuiltinOptions.SoftmaxOptions,
  CONCATENATIONOPTIONS = Circle.BuiltinOptions.ConcatenationOptions,
  ADDOPTIONS = Circle.BuiltinOptions.AddOptions,
  L2NORMOPTIONS = Circle.BuiltinOptions.L2NormOptions,
  LOCALRESPONSENORMALIZATIONOPTIONS = Circle.BuiltinOptions
    .LocalResponseNormalizationOptions,
  LSTMOPTIONS = Circle.BuiltinOptions.LSTMOptions,
  RESIZEBILINEAROPTIONS = Circle.BuiltinOptions.ResizeBilinearOptions,
  CALLOPTIONS = Circle.BuiltinOptions.CallOptions,
  RESHAPEOPTIONS = Circle.BuiltinOptions.ReshapeOptions,
  SKIPGRAMOPTIONS = Circle.BuiltinOptions.SkipGramOptions,
  SPACETODEPTHOPTIONS = Circle.BuiltinOptions.SpaceToDepthOptions,
  EMBEDDINGLOOKUPSPARSEOPTIONS = Circle.BuiltinOptions
    .EmbeddingLookupSparseOptions,
  MULOPTIONS = Circle.BuiltinOptions.MulOptions,
  PADOPTIONS = Circle.BuiltinOptions.PadOptions,
  GATHEROPTIONS = Circle.BuiltinOptions.GatherOptions,
  BATCHTOSPACENDOPTIONS = Circle.BuiltinOptions.BatchToSpaceNDOptions,
  SPACETOBATCHNDOPTIONS = Circle.BuiltinOptions.SpaceToBatchNDOptions,
  TRANSPOSEOPTIONS = Circle.BuiltinOptions.TransposeOptions,
  REDUCEROPTIONS = Circle.BuiltinOptions.ReducerOptions,
  SUBOPTIONS = Circle.BuiltinOptions.SubOptions,
  DIVOPTIONS = Circle.BuiltinOptions.DivOptions,
  SQUEEZEOPTIONS = Circle.BuiltinOptions.SqueezeOptions,
  SEQUENCERNNOPTIONS = Circle.BuiltinOptions.SequenceRNNOptions,
  STRIDEDSLICEOPTIONS = Circle.BuiltinOptions.StridedSliceOptions,
  EXPOPTIONS = Circle.BuiltinOptions.ExpOptions,
  TOPKV2OPTIONS = Circle.BuiltinOptions.TopKV2Options,
  SPLITOPTIONS = Circle.BuiltinOptions.SplitOptions,
  LOGSOFTMAXOPTIONS = Circle.BuiltinOptions.LogSoftmaxOptions,
  CASTOPTIONS = Circle.BuiltinOptions.CastOptions,
  DEQUANTIZEOPTIONS = Circle.BuiltinOptions.DequantizeOptions,
  MAXIMUMMINIMUMOPTIONS = Circle.BuiltinOptions.MaximumMinimumOptions,
  ARGMAXOPTIONS = Circle.BuiltinOptions.ArgMaxOptions,
  LESSOPTIONS = Circle.BuiltinOptions.LessOptions,
  NEGOPTIONS = Circle.BuiltinOptions.NegOptions,
  PADV2OPTIONS = Circle.BuiltinOptions.PadV2Options,
  GREATEROPTIONS = Circle.BuiltinOptions.GreaterOptions,
  GREATEREQUALOPTIONS = Circle.BuiltinOptions.GreaterEqualOptions,
  LESSEQUALOPTIONS = Circle.BuiltinOptions.LessEqualOptions,
  SELECTOPTIONS = Circle.BuiltinOptions.SelectOptions,
  SLICEOPTIONS = Circle.BuiltinOptions.SliceOptions,
  TRANSPOSECONVOPTIONS = Circle.BuiltinOptions.TransposeConvOptions,
  SPARSETODENSEOPTIONS = Circle.BuiltinOptions.SparseToDenseOptions,
  TILEOPTIONS = Circle.BuiltinOptions.TileOptions,
  EXPANDDIMSOPTIONS = Circle.BuiltinOptions.ExpandDimsOptions,
  EQUALOPTIONS = Circle.BuiltinOptions.EqualOptions,
  NOTEQUALOPTIONS = Circle.BuiltinOptions.NotEqualOptions,
  SHAPEOPTIONS = Circle.BuiltinOptions.ShapeOptions,
  POWOPTIONS = Circle.BuiltinOptions.PowOptions,
  ARGMINOPTIONS = Circle.BuiltinOptions.ArgMinOptions,
  FAKEQUANTOPTIONS = Circle.BuiltinOptions.FakeQuantOptions,
  PACKOPTIONS = Circle.BuiltinOptions.PackOptions,
  LOGICALOROPTIONS = Circle.BuiltinOptions.LogicalOrOptions,
  ONEHOTOPTIONS = Circle.BuiltinOptions.OneHotOptions,
  LOGICALANDOPTIONS = Circle.BuiltinOptions.LogicalAndOptions,
  LOGICALNOTOPTIONS = Circle.BuiltinOptions.LogicalNotOptions,
  UNPACKOPTIONS = Circle.BuiltinOptions.UnpackOptions,
  FLOORDIVOPTIONS = Circle.BuiltinOptions.FloorDivOptions,
  SQUAREOPTIONS = Circle.BuiltinOptions.SquareOptions,
  ZEROSLIKEOPTIONS = Circle.BuiltinOptions.ZerosLikeOptions,
  FILLOPTIONS = Circle.BuiltinOptions.FillOptions,
  BIDIRECTIONALSEQUENCELSTMOPTIONS = Circle.BuiltinOptions
    .BidirectionalSequenceLSTMOptions,
  BIDIRECTIONALSEQUENCERNNOPTIONS = Circle.BuiltinOptions
    .BidirectionalSequenceRNNOptions,
  UNIDIRECTIONALSEQUENCELSTMOPTIONS = Circle.BuiltinOptions
    .UnidirectionalSequenceLSTMOptions,
  FLOORMODOPTIONS = Circle.BuiltinOptions.FloorModOptions,
  RANGEOPTIONS = Circle.BuiltinOptions.RangeOptions,
  RESIZENEARESTNEIGHBOROPTIONS = Circle.BuiltinOptions
    .ResizeNearestNeighborOptions,
  LEAKYRELUOPTIONS = Circle.BuiltinOptions.LeakyReluOptions,
  SQUAREDDIFFERENCEOPTIONS = Circle.BuiltinOptions.SquaredDifferenceOptions,
  MIRRORPADOPTIONS = Circle.BuiltinOptions.MirrorPadOptions,
  ABSOPTIONS = Circle.BuiltinOptions.AbsOptions,
  SPLITVOPTIONS = Circle.BuiltinOptions.SplitVOptions,
  UNIQUEOPTIONS = Circle.BuiltinOptions.UniqueOptions,
  REVERSEV2OPTIONS = Circle.BuiltinOptions.ReverseV2Options,
  ADDNOPTIONS = Circle.BuiltinOptions.AddNOptions,
  GATHERNDOPTIONS = Circle.BuiltinOptions.GatherNdOptions,
  COSOPTIONS = Circle.BuiltinOptions.CosOptions,
  WHEREOPTIONS = Circle.BuiltinOptions.WhereOptions,
  RANKOPTIONS = Circle.BuiltinOptions.RankOptions,
  REVERSESEQUENCEOPTIONS = Circle.BuiltinOptions.ReverseSequenceOptions,
  MATRIXDIAGOPTIONS = Circle.BuiltinOptions.MatrixDiagOptions,
  QUANTIZEOPTIONS = Circle.BuiltinOptions.QuantizeOptions,
  MATRIXSETDIAGOPTIONS = Circle.BuiltinOptions.MatrixSetDiagOptions,
  HARDSWISHOPTIONS = Circle.BuiltinOptions.HardSwishOptions,
  IFOPTIONS = Circle.BuiltinOptions.IfOptions,
  WHILEOPTIONS = Circle.BuiltinOptions.WhileOptions,
  DEPTHTOSPACEOPTIONS = Circle.BuiltinOptions.DepthToSpaceOptions,
  NONMAXSUPPRESSIONV4OPTIONS = Circle.BuiltinOptions.NonMaxSuppressionV4Options,
  NONMAXSUPPRESSIONV5OPTIONS = Circle.BuiltinOptions.NonMaxSuppressionV5Options,
  SCATTERNDOPTIONS = Circle.BuiltinOptions.ScatterNdOptions,
  SELECTV2OPTIONS = Circle.BuiltinOptions.SelectV2Options,
  DENSIFYOPTIONS = Circle.BuiltinOptions.DensifyOptions,
  SEGMENTSUMOPTIONS = Circle.BuiltinOptions.SegmentSumOptions,
  BATCHMATMULOPTIONS = Circle.BuiltinOptions.BatchMatMulOptions,
  CUMSUMOPTIONS = Circle.BuiltinOptions.CumsumOptions,
  CALLONCEOPTIONS = Circle.BuiltinOptions.CallOnceOptions,
  BROADCASTTOOPTIONS = Circle.BuiltinOptions.BroadcastToOptions,
  RFFT2DOPTIONS = Circle.BuiltinOptions.Rfft2dOptions,
  CONV3DOPTIONS = Circle.BuiltinOptions.Conv3DOptions,
  HASHTABLEOPTIONS = Circle.BuiltinOptions.HashtableOptions,
  HASHTABLEFINDOPTIONS = Circle.BuiltinOptions.HashtableFindOptions,
  HASHTABLEIMPORTOPTIONS = Circle.BuiltinOptions.HashtableImportOptions,
  HASHTABLESIZEOPTIONS = Circle.BuiltinOptions.HashtableSizeOptions,
  VARHANDLEOPTIONS = Circle.BuiltinOptions.VarHandleOptions,
  READVARIABLEOPTIONS = Circle.BuiltinOptions.ReadVariableOptions,
  ASSIGNVARIABLEOPTIONS = Circle.BuiltinOptions.AssignVariableOptions,
  RANDOMOPTIONS = Circle.BuiltinOptions.RandomOptions,
  BCQGATHEROPTIONS = Circle.BuiltinOptions.BCQGatherOptions,
  BCQFULLYCONNECTEDOPTIONS = Circle.BuiltinOptions.BCQFullyConnectedOptions,
  INSTANCENORMOPTIONS = Circle.BuiltinOptions.InstanceNormOptions,
}

/**
 * map CircleType string to CircleType class.
 */
export const CircleType: any = {
  TensorType: Circle.TensorType,
  DimensionType: Circle.DimensionType,
  Padding: Circle.Padding,
  ActivationFunctionType: Circle.ActivationFunctionType,
  LSHProjectionType: Circle.LSHProjectionType,
  FullyConnectedOptionsWeightsFormat: Circle.FullyConnectedOptionsWeightsFormat,
  LSTMKernelType: Circle.LSTMKernelType,
  CombinerType: Circle.CombinerType,
  MirrorPadMode: Circle.MirrorPadMode,
  CustomOptionsFormat: Circle.CustomOptionsFormat,
  DataFormat: Circle.DataFormat,
};

/**
 * map normal type to typescript type.
 */
export const NormalType: any = {
  int: Number,
  int32: Number,
  byte: Number,
  ubyte: Number,
  uint: Number,
  int64: Number,
  int16: Number,
  uint16: Number,
  uint32: Number,
  uint64: Number,
  "int32[]": Int32Array,
  "int16[]": Int16Array,
  "uint32[]": Uint32Array,
  "uint16[]": Uint16Array,
  "float32[]": Float32Array,
  "float64[]": Float64Array,
};

/**
 * map BuilinOptionsType enum to BuiltInOptions class.
 */
export const NumberToBuiltinOptions = {
  0: null,
  1: Circle.Conv2DOptionsT,
  2: Circle.DepthwiseConv2DOptionsT,
  3: Circle.ConcatEmbeddingsOptionsT,
  4: Circle.LSHProjectionOptionsT,
  5: Circle.Pool2DOptionsT,
  6: Circle.SVDFOptionsT,
  7: Circle.RNNOptionsT,
  8: Circle.FullyConnectedOptionsT,
  9: Circle.SoftmaxOptionsT,
  10: Circle.ConcatenationOptionsT,
  11: Circle.AddOptionsT,
  12: Circle.L2NormOptionsT,
  13: Circle.LocalResponseNormalizationOptionsT,
  14: Circle.LSTMOptionsT,
  15: Circle.ResizeBilinearOptionsT,
  16: Circle.CallOptionsT,
  17: Circle.ReshapeOptionsT,
  18: Circle.SkipGramOptionsT,
  19: Circle.SpaceToDepthOptionsT,
  20: Circle.EmbeddingLookupSparseOptionsT,
  21: Circle.MulOptionsT,
  22: Circle.PadOptionsT,
  23: Circle.GatherOptionsT,
  24: Circle.BatchToSpaceNDOptionsT,
  25: Circle.SpaceToBatchNDOptionsT,
  26: Circle.TransposeOptionsT,
  27: Circle.ReducerOptionsT,
  28: Circle.SubOptionsT,
  29: Circle.DivOptionsT,
  30: Circle.SqueezeOptionsT,
  31: Circle.SequenceRNNOptionsT,
  32: Circle.StridedSliceOptionsT,
  33: Circle.ExpOptionsT,
  34: Circle.TopKV2OptionsT,
  35: Circle.SplitOptionsT,
  36: Circle.LogSoftmaxOptionsT,
  37: Circle.CastOptionsT,
  38: Circle.DequantizeOptionsT,
  39: Circle.MaximumMinimumOptionsT,
  40: Circle.ArgMaxOptionsT,
  41: Circle.LessOptionsT,
  42: Circle.NegOptionsT,
  43: Circle.PadV2OptionsT,
  44: Circle.GreaterOptionsT,
  45: Circle.GreaterEqualOptionsT,
  46: Circle.LessEqualOptionsT,
  47: Circle.SelectOptionsT,
  48: Circle.SliceOptionsT,
  49: Circle.TransposeConvOptionsT,
  50: Circle.SparseToDenseOptionsT,
  51: Circle.TileOptionsT,
  52: Circle.ExpandDimsOptionsT,
  53: Circle.EqualOptionsT,
  54: Circle.NotEqualOptionsT,
  55: Circle.ShapeOptionsT,
  56: Circle.PowOptionsT,
  57: Circle.ArgMinOptionsT,
  58: Circle.FakeQuantOptionsT,
  59: Circle.PackOptionsT,
  60: Circle.LogicalOrOptionsT,
  61: Circle.OneHotOptionsT,
  62: Circle.LogicalAndOptionsT,
  63: Circle.LogicalNotOptionsT,
  64: Circle.UnpackOptionsT,
  65: Circle.FloorDivOptionsT,
  66: Circle.SquareOptionsT,
  67: Circle.ZerosLikeOptionsT,
  68: Circle.FillOptionsT,
  69: Circle.BidirectionalSequenceLSTMOptionsT,
  70: Circle.BidirectionalSequenceRNNOptionsT,
  71: Circle.UnidirectionalSequenceLSTMOptionsT,
  72: Circle.FloorModOptionsT,
  73: Circle.RangeOptionsT,
  74: Circle.ResizeNearestNeighborOptionsT,
  75: Circle.LeakyReluOptionsT,
  76: Circle.SquaredDifferenceOptionsT,
  77: Circle.MirrorPadOptionsT,
  78: Circle.AbsOptionsT,
  79: Circle.SplitVOptionsT,
  80: Circle.UniqueOptionsT,
  81: Circle.ReverseV2OptionsT,
  82: Circle.AddNOptionsT,
  83: Circle.GatherNdOptionsT,
  84: Circle.CosOptionsT,
  85: Circle.WhereOptionsT,
  86: Circle.RankOptionsT,
  87: Circle.ReverseSequenceOptionsT,
  88: Circle.MatrixDiagOptionsT,
  89: Circle.QuantizeOptionsT,
  90: Circle.MatrixSetDiagOptionsT,
  91: Circle.HardSwishOptionsT,
  92: Circle.IfOptionsT,
  93: Circle.WhileOptionsT,
  94: Circle.DepthToSpaceOptionsT,
  95: Circle.NonMaxSuppressionV4OptionsT,
  96: Circle.NonMaxSuppressionV5OptionsT,
  97: Circle.ScatterNdOptionsT,
  98: Circle.SelectV2OptionsT,
  99: Circle.DensifyOptionsT,
  100: Circle.SegmentSumOptionsT,
  101: Circle.BatchMatMulOptionsT,
  102: Circle.CumsumOptionsT,
  103: Circle.CallOnceOptionsT,
  104: Circle.BroadcastToOptionsT,
  105: Circle.Rfft2dOptionsT,
  106: Circle.Conv3DOptionsT,
  107: Circle.HashtableOptionsT,
  108: Circle.HashtableFindOptionsT,
  109: Circle.HashtableImportOptionsT,
  110: Circle.HashtableSizeOptionsT,
  111: Circle.VarHandleOptionsT,
  112: Circle.ReadVariableOptionsT,
  113: Circle.AssignVariableOptionsT,
  114: Circle.RandomOptionsT,
  252: Circle.BCQGatherOptionsT,
  253: Circle.BCQFullyConnectedOptionsT,
  254: Circle.InstanceNormOptionsT,
};

/**
 * map SparseIndexVector enum to VectorClass.
 */
export const SparseVector = {
  0: null,
  1: Circle.Int32VectorT,
  2: Circle.Uint16VectorT,
  3: Circle.Uint8VectorT,
};
