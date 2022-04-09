
import {STAFFS, DEPARTMENTS, ROLE} from "../shared/staffs";

export const startState={
    staffs : STAFFS,
    departments: DEPARTMENTS,
    role: ROLE,
};
export const Reducer = (state= startState, action) => {
    return state;
}
