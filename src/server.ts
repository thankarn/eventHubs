// import { EventHubConsumerClient  } from '@azure/event-hubs';
import logger from './logger';
import env from './env';
import { processEvent } from "./app";

const connectionString = env.CONNECTIONSTRING || "";

const main = async () => {
    // try {
    //     logger.info("IoT Hub Quickstarts - Read device to cloud messages.");

    //     const clientOptions = {};
    //     const consumerClient = new EventHubConsumerClient(
    //         "telemetrylocalmonitoring",
    //         connectionString,
    //         clientOptions
    //     );
    
    //     consumerClient.subscribe({
    //         processEvents: processEvent,
    //         processError: processError,
    //     });

    // } catch (ex) {
    //     console.log("### ERROR ###");
    //     logger.error(ex);
    // }
    
}

main()
.catch((error) => {
    // logger.error("Error running sample:", error);
});