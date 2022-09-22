import { MoveLearnMethod } from "./move_learn_method.model";
import { Move } from "./move_model";
import { VersionGroupDetails } from "./version_group_details.model";

export interface Moves {
  move: Move[];
  version_group_details : VersionGroupDetails[];
  move_learn_method: MoveLearnMethod[];
  }
