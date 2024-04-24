import { useState } from "react";
import toast from "react-hot-toast";
import {getChannelDetails as getChannelDetailsRequest} from '../../services'
 
export const useChannelDetails = () =>{
    const [channelsDetails, setChannelSettings ] = useState();
 
    const getChannelDetails = async (id) => {
        const responseData = await getChannelDetailsRequest(id);
 
        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data ||
                'Error al cargar la informacion del canal'
            )
        }
 
        setChannelSettings(responseData)
    }
 
    return{
        channelsDetails,
        isFetching: !channelsDetails,
        getChannelDetails
    }
}