import { useMemo } from "react";
import {Storage  } from "../../helpers";

export const useProfileController = () =>{
    const userData =Storage.getUserData();
    const email = useMemo(() => userData?.email ?? '', [userData])
    return {
        email
    }
}