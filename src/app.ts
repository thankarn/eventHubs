// import { ProcessEventsHandler, ProcessErrorHandler } from '@azure/event-hubs';
import axios from "axios";
import env from './env';
import logger from "./logger";
import { IEventMessage } from './models/IEventMessage';
import { MessageTypes } from "./utils/MessageType";
import MeterValueService from "./services/meter.value.service";
import StopTransactionService from "./services/stopTransaction.service";
import StatusNotificationService from "./services/statusNotification.service";
import ChargerStatusService from './services/chargerStatus.service';
import ValidateCard from './services/validateCard.service'
import {httpClient} from './utils/httpClient';

// var xl = require('excel4node');
// var wb = new xl.Workbook();
// var ws = wb.addWorksheet('Sheet 1');

let i=0;

// const processError: ProcessErrorHandler = async (err: any): Promise<void> => {
//      console.log("ProcessError: ", err.message);
//     logger.error(err.message);
// };

const processMessage = async (method, payload, chargerId, systemProperties,additional_payload) => {
    // const used = process.memoryUsage();


    console.log("Method: ", method)
    console.log("chargerId: ", chargerId)
    console.log("payload: ", payload)
    switch (method) {
        case MessageTypes.MeterValues:
                    MeterValueService.init(payload);
        case MessageTypes.StopTransaction:
                   StopTransactionService.init(payload);
        case MessageTypes.StatusNotification:
                   StatusNotificationService.init(chargerId, payload);
        case MessageTypes.ChargerStatus:
                ChargerStatusService.init(chargerId, payload);
        case MessageTypes.ValidateCard:
                 ValidateCard.init(payload, chargerId, systemProperties)
        case MessageTypes.Heartbeat:
            let url: string = `${env.AAD_EVC_BO_API_ENDPOINT}/iot/charger/transaction`;
          await httpClient.post(
                    url,
                    <IEventMessage>{
                        chargerId: chargerId,
                        method:method,
                        payload: payload,
                        additional_payload: additional_payload,
                    }
                );

        default:
            break;
    }
    
}



const saveMessage = async (message: any): Promise<void> => {
    try {
  
        // const resp = await httpClient.post(
        //     url,
        //     <IEventMessage>{
        //         chargerId: message.body.ChargerID,
        //         method: message.body.OcppMethod,
        //         payload: message.body.data,
        //         additional_payload: message.body.additional_payload,
        //     }
        // );
        // console.log("message=>",message);
        if(message){
        
        if(!message.body.OcppMethod){
           
        console.log("data from hub =>",message.body);

        }else{
            console.log("################# process message #################");
            await processMessage(message.body.OcppMethod, message.body.data, message.body.ChargerID, message.systemProperties,message.body.additional_payload);

        }
    }

         

    } catch (error) {
        logger.error(error);
    }
}

const processEvent = async (messages: any): Promise<void> => {
    let results: any = [];
    const used = process.memoryUsage();
    
    const date = new Date();
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    

    // for (const message of messages) {
        if(messages.length>0){
            logger.info("Telemetry received:", messages[0].body);
            console.log("========");
            // for (let key in used) {
            //     console.log(
            //       `(loop)=>${key} ${
            //         Math.round((used[key] / 1024 / 1024) * 100) / 100
            //       } MB`
            //     );
            //     if (key === "heapUsed") {
            //       ws.cell(i, 1).string(`${key}`);
            //       ws.cell(i, 2).string(
            //         `${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
            //       );
            //       ws.cell(i, 3).string(`${hour}:${minutes}:${seconds}`);
            //     }
            //   }
            //   wb.write("second1.xlsx");
            //   i++;
          
        saveMessage(messages[0]);
    }
    

    
};

export { processEvent }