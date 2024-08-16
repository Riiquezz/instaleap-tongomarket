declare const DeleteJobsItems: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly job_id: {
                readonly type: "string";
                readonly format: "uuid";
                readonly description: "The job's id.";
            };
            readonly items_references: {
                readonly type: "array";
                readonly description: "The item's references. If more than one item inside the job matches the reference, all items will be marked as canceled.";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly required: readonly ["job_id", "items_references"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly job_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly items_ids: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "uuid";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Malformed payload";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Missing attributes";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteJobsJobidCancel: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["jobId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetJobsAvailabilitySlotidCheck: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slotId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["slotId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly slot_valid: {
                    readonly type: "boolean";
                    readonly default: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly slot_valid: {
                    readonly type: "boolean";
                    readonly default: false;
                };
                readonly message: {
                    readonly type: "string";
                    readonly default: "Slot not found";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly slot_valid: {
                    readonly type: "boolean";
                    readonly default: false;
                };
                readonly message: {
                    readonly type: "string";
                    readonly default: "Slot expired";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetJobsJobid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["jobId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly job_number: {
                    readonly type: "string";
                    readonly description: "It is your internal reference of the Order/Job in your systems.";
                };
                readonly client_id: {
                    readonly type: "string";
                    readonly description: "It is a unique ID for you as a Client in our Systems. It's how technically we identify you and your orders";
                };
                readonly start_time: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "UTC date / [ISO - 8601](https://es.wikipedia.org/wiki/ISO_8601). Start time of the Slot for this Job";
                };
                readonly end_time: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "UTC date / [ISO - 8601](https://es.wikipedia.org/wiki/ISO_8601). End time of the Slot for this Job";
                };
                readonly state: {
                    readonly type: "string";
                    readonly description: "Describes the state of the Job.";
                };
                readonly origin: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly address: {
                            readonly type: "string";
                        };
                        readonly address_two: {
                            readonly type: "string";
                        };
                        readonly country: {
                            readonly type: "string";
                        };
                        readonly state: {
                            readonly type: "string";
                        };
                        readonly city: {
                            readonly type: "string";
                        };
                        readonly zip_code: {
                            readonly type: "string";
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly coordinates: {
                            readonly type: "object";
                            readonly properties: {
                                readonly lat: {
                                    readonly type: "number";
                                };
                                readonly lng: {
                                    readonly type: "number";
                                };
                            };
                        };
                    };
                };
                readonly destination: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly address: {
                            readonly type: "string";
                        };
                        readonly address_two: {
                            readonly type: "string";
                        };
                        readonly country: {
                            readonly type: "string";
                        };
                        readonly state: {
                            readonly type: "string";
                        };
                        readonly city: {
                            readonly type: "string";
                        };
                        readonly zip_code: {
                            readonly type: "string";
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly coordinates: {
                            readonly type: "object";
                            readonly properties: {
                                readonly lat: {
                                    readonly type: "number";
                                };
                                readonly lng: {
                                    readonly type: "number";
                                };
                            };
                        };
                    };
                };
                readonly total_items: {
                    readonly type: "number";
                    readonly description: "Total items in the current Job.";
                };
                readonly items_replaced: {
                    readonly type: "number";
                    readonly description: "Total items replaced in the current Job.";
                };
                readonly products_cost: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amount: {
                            readonly type: "number";
                        };
                        readonly currency_code: {
                            readonly type: "string";
                        };
                    };
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly package_id: {
                                readonly type: "string";
                            };
                            readonly quantity: {
                                readonly type: "number";
                            };
                            readonly found_quantity: {
                                readonly type: "number";
                            };
                            readonly photo_url: {
                                readonly type: "string";
                            };
                            readonly presentation: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly quantity: {
                                        readonly type: "number";
                                    };
                                    readonly unit: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly price: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly amount: {
                                                readonly type: "number";
                                            };
                                            readonly currency_code: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly weight: {
                                        readonly type: "number";
                                    };
                                    readonly dimensions: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly length: {
                                                    readonly type: "number";
                                                };
                                                readonly width: {
                                                    readonly type: "number";
                                                };
                                                readonly height: {
                                                    readonly type: "number";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly attributes: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly category: {
                                        readonly type: "string";
                                    };
                                    readonly "another attributes": {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly origin: {
                                readonly description: "Who adds the item (client, picker...)";
                                readonly type: "string";
                            };
                            readonly comment: {
                                readonly type: "string";
                            };
                            readonly is_substitute: {
                                readonly type: "boolean";
                            };
                            readonly replaced_by: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly collect_with: {
                    readonly type: "object";
                    readonly properties: {
                        readonly method: {
                            readonly type: "string";
                            readonly description: "The payment method used by the user. Options are PREPAID, CASH, PAYMENT_TERMINAL, LOYALTY_CARD (used in the picker app to get special prices from your catalogue).";
                        };
                        readonly payment: {
                            readonly type: "object";
                            readonly properties: {
                                readonly amount: {
                                    readonly type: "number";
                                };
                                readonly currency: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
                readonly recipient: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly email: {
                            readonly type: "string";
                        };
                        readonly phone_number: {
                            readonly type: "number";
                        };
                    };
                };
                readonly tasks: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly state: {
                            readonly type: "string";
                        };
                        readonly resource: {
                            readonly type: "string";
                        };
                        readonly payment: {
                            readonly type: "string";
                        };
                        readonly steps: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly can_process_checkout: {
                    readonly type: "boolean";
                };
                readonly delivery_options: {
                    readonly type: "array";
                    readonly items: {};
                };
                readonly job_comment: {
                    readonly type: "string";
                };
                readonly external_data: {
                    readonly description: "You can inform the resource about any additional data to register the order. This information can be submitted in create order or updated later with the endpoint external_data (link). You can sent the information to `shopperApp`, `control tower` or `webhook`.";
                    readonly type: "object";
                    readonly properties: {
                        readonly webhook: {
                            readonly type: "object";
                            readonly properties: {
                                readonly key: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly backoffice: {
                            readonly type: "object";
                            readonly properties: {
                                readonly key: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Job not found";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostJobs: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly slot_id: {
                readonly type: "string";
            };
            readonly client_reference: {
                readonly type: "string";
                readonly description: "OrderId or equivalent reference created in your backend for the job to be created.";
            };
            readonly recipient: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly email: {
                        readonly type: "string";
                    };
                    readonly phone_number: {
                        readonly type: "string";
                    };
                    readonly identification: {
                        readonly type: "object";
                        readonly description: "(OPTIONAL) Customer/Recipient identification. This data is encrypted once it enters Instaleap systems.";
                        readonly properties: {
                            readonly number: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of identification (Ex. NIF, VAT number, Cedula, Passport, etc";
                            };
                        };
                    };
                };
                readonly required: readonly ["name", "email", "phone_number"];
            };
            readonly payment_info: {
                readonly type: "object";
                readonly properties: {
                    readonly currency_code: {
                        readonly type: "string";
                        readonly description: "Currency code as defined in the [ISO - 4217](https://es.wikipedia.org/wiki/ISO_4217) standard.";
                    };
                    readonly prices: {
                        readonly type: "object";
                        readonly properties: {
                            readonly subtotal: {
                                readonly type: "number";
                                readonly description: "Subtotal of the goods. Without taxes, discounts or shipping_fee.";
                            };
                            readonly shipping_fee: {
                                readonly type: "number";
                                readonly description: "Fee charged to the customer for the shipping of goods.";
                            };
                            readonly discounts: {
                                readonly type: "number";
                                readonly description: "Discounts applied to the customer.";
                            };
                            readonly taxes: {
                                readonly type: "number";
                                readonly description: "Taxes charged to the customer.";
                            };
                            readonly order_value: {
                                readonly type: "number";
                                readonly description: "The value to be paid for the order, it includes the price of the goods, taxes, discounts and shipping_fee.";
                            };
                            readonly attributes: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["ORDER_VALUE", "SHIPPING_FEE", "TAXES", "DISCOUNTS", "SUBTOTAL"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly type: "number";
                                        };
                                    };
                                    readonly description: "Add here details of each item that is within the prices. Specify here if there is more than one value in any item. I.e, If the invoice charges a total of 100 in taxes divided in two subtypes, there will be two items, describing each fee, each one with a name and value";
                                    readonly required: readonly ["type", "name", "value"];
                                };
                            };
                            readonly additional_info: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly type: "number";
                                        };
                                    };
                                    readonly description: "Additional informacion about prices in the current job.";
                                };
                            };
                        };
                        readonly required: readonly ["order_value"];
                    };
                    readonly payment: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly description: "Internal Client ID of the payment type.";
                                readonly type: readonly ["string", "null"];
                            };
                            readonly payment_status: {
                                readonly type: "string";
                                readonly enum: readonly ["FAILED", "SUCCEEDED", "CHANGED", "IN_PROGRESS", "REVERTED"];
                                readonly description: "Status of the payment. It could be one of these 5 values: 1. 'FAILED': When the total payment of the order fails. If it is reported that the payment was failed, our system will automatically raise a flag in the order so that it can be resolved by an agent from the control tower. 2. 'SUCCEEDED': When the full payment of the order is successful. If you have a payment confirmation lock activated, when you receive this status, the Shopper App is unlocked. 3. 'CHANGED': Payment information has changed. 4. 'IN_PROGRESS': The payment is in progress. 5. 'REVERTED': The payment was completely reverted";
                            };
                            readonly method: {
                                readonly type: "string";
                                readonly enum: readonly ["CASH", "PREPAID", "PAYMENT_TERMINAL", "LOYALTY_CARD", "PAYMENT_LINK", "TRANSFER"];
                                readonly description: "Defines the payment method intended to be used by the user. Options are PREPAID, CASH, PAYMENT_TERMINAL, LOYALTY_CARD, PAYMENT_LINK and TRANSFER (used in the picker app to get special prices from your catalogue).";
                            };
                            readonly reference: {
                                readonly description: "Provide an identifier for the credit card. In case of credit/debit cards include the last 4 numbers registered for it (for example, VISA *3939).";
                                readonly type: readonly ["string", "null"];
                            };
                            readonly value: {
                                readonly type: "number";
                                readonly description: "Amount to be paid";
                            };
                            readonly payment_status_details: {
                                readonly type: "string";
                                readonly description: "Extra details of the payment status";
                            };
                            readonly method_details: {
                                readonly type: "string";
                                readonly description: "Extra details of the payment method";
                            };
                            readonly blocking_policy: {
                                readonly type: "string";
                                readonly description: "Desired Blocking Policy";
                                readonly enum: readonly ["CHECKOUT", "EXIT_STORE", "UNBLOCKED"];
                            };
                            readonly metadata: {
                                readonly type: "object";
                                readonly maxLength: 1000;
                                readonly description: "Json object to add details or relevant information about the payment being processed";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly required: readonly ["method"];
                    };
                };
            };
            readonly add_delivery_code: {
                readonly type: "boolean";
                readonly default: true;
                readonly description: "Used to force the driver to complete the order with a delivery code. Default value is `true`.";
            };
            readonly job_comment: {
                readonly type: "string";
                readonly description: "General order comments can be captured in this field.";
            };
            readonly contact_less: {
                readonly type: "object";
                readonly properties: {
                    readonly comment: {
                        readonly type: "string";
                        readonly enum: readonly ["LeaveAtTheDoor", "LeaveInReception"];
                        readonly description: "Used to set a delivery option, either in reception or at the door.";
                    };
                    readonly cash_receiver: {
                        readonly type: "string";
                        readonly description: "Intended for name of person who will receive delivery.";
                    };
                    readonly phone_number: {
                        readonly type: "string";
                        readonly description: "Phone number of the secondary recipient.";
                    };
                };
                readonly required: readonly ["comment", "cash_receiver", "phone_number"];
            };
            readonly external_data: {
                readonly type: "object";
                readonly description: "You can inform the resource about any additional data to register the order. This information can be submitted in create order or updated later with the endpoint external_data (link). You can send the information to `shopperApp`, `control tower`, or `webhook`.";
                readonly properties: {
                    readonly webhook: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly backoffice: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly shopper_app: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
            };
        };
        readonly required: readonly ["slot_id", "client_reference", "recipient"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
                readonly job_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Missing attributes";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostJobsAvailabilityV2: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly currency_code: {
                readonly type: "string";
                readonly description: "Currency code as defined in the [ISO - 4217](https://es.wikipedia.org/wiki/ISO_4217) standard.";
            };
            readonly start: {
                readonly type: "string";
                readonly format: "date-time";
                readonly description: "UTC date / [ISO - 8601](https://es.wikipedia.org/wiki/ISO_8601). It must be at most five minutes before the current date.";
            };
            readonly end: {
                readonly type: "string";
                readonly format: "date-time";
                readonly description: "UTC date / [ISO - 8601](https://es.wikipedia.org/wiki/ISO_8601). It must be at most seven days after the start date";
            };
            readonly slot_size: {
                readonly type: "number";
                readonly description: "Maximum size of the slots in minutes.  \n Must be a multiple of 15.";
            };
            readonly minimum_slot_size: {
                readonly type: "number";
                readonly description: "Minimum size of the slots in minutes. \n Must be a multiple of 15.";
            };
            readonly operational_models_priority: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly enum: readonly ["PICK_AND_DELIVERY_WITH_STORAGE_NO_TRANSFER", "PICK_AND_DELIVERY", "FULL_SERVICE", "PICK_AND_COLLECT", "PICK_AND_COLLECT_NO_TRANSFER", "PICK_AND_DELIVERY_WITH_STORAGE", "ZONE_PICKING_AND_DELIVERY_WITH_STORAGE", "ZONE_PICKING_AND_COLLECT"];
                };
                readonly description: "Its default value will be the following list/array: ['PICK_AND_DELIVERY_WITH_STORAGE_NO_TRANSFER', 'PICK_AND_DELIVERY', 'FULL_SERVICE', 'PICK_AND_COLLECT', 'PICK_AND_COLLECT_NO_TRANSFER', 'PICK_AND_DELIVERY_WITH_STORAGE', 'ZONE_PICKING_AND_DELIVERY_WITH_STORAGE','ZONE_PICKING_AND_COLLECT'] \n \nThe items in the array represent which operational models will be taken into account. The order represents their priority. The first item in the list/array is the one with the higher priority";
            };
            readonly fallback: {
                readonly type: "boolean";
                readonly description: "Its default value is false. \n If this option is active and there is no capacity for the current request a set of PICK AND DELIVERY slots will be returned.";
            };
            readonly store_reference: {
                readonly type: "string";
                readonly description: "It's the store id to identify it into your system.";
            };
            readonly origin: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly address: {
                        readonly type: "string";
                    };
                    readonly address_two: {
                        readonly type: "string";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly country: {
                        readonly type: "string";
                    };
                    readonly city: {
                        readonly type: "string";
                    };
                    readonly state: {
                        readonly type: "string";
                    };
                    readonly zip_code: {
                        readonly type: "string";
                    };
                    readonly latitude: {
                        readonly type: "number";
                    };
                    readonly longitude: {
                        readonly type: "number";
                    };
                };
                readonly required: readonly ["name", "address", "latitude", "longitude"];
            };
            readonly destination: {
                readonly type: "object";
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly address: {
                        readonly type: "string";
                    };
                    readonly address_two: {
                        readonly type: "string";
                    };
                    readonly description: {
                        readonly type: "string";
                    };
                    readonly country: {
                        readonly type: "string";
                    };
                    readonly city: {
                        readonly type: "string";
                    };
                    readonly state: {
                        readonly type: "string";
                    };
                    readonly zip_code: {
                        readonly type: "string";
                    };
                    readonly latitude: {
                        readonly type: "number";
                    };
                    readonly longitude: {
                        readonly type: "number";
                    };
                };
                readonly required: readonly ["name", "address", "latitude", "longitude"];
            };
            readonly job_items: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly photo_url: {
                            readonly type: "string";
                        };
                        readonly unit: {
                            readonly type: "string";
                            readonly description: "For standard units of measure use UCUM base units. Otherwise, it will be considered as a custom unit.";
                        };
                        readonly sub_unit: {
                            readonly type: "string";
                            readonly description: "For standard units of measure use UCUM base units. Otherwise, it will be considered as a custom unit.";
                        };
                        readonly quantity: {
                            readonly type: "number";
                        };
                        readonly sub_quantity: {
                            readonly type: "number";
                        };
                        readonly quantity_found_limits: {
                            readonly description: "You can define the maximum and minimum quantity of the product that can be picked. This will allow restricting the quantities of the product that can be carried according to promotions or business decisions. `These parameters will take precedence over the global parameters.`";
                            readonly properties: {
                                readonly max: {
                                    readonly type: "number";
                                    readonly description: "Quantity of product in the unit defined above, which restricts the collector the maximum that he can select from a product.";
                                };
                                readonly min: {
                                    readonly type: "number";
                                    readonly description: "Quantity of product in the unit defined above, which restricts the collector the minimum that he can select from a product.";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly barcodes: {
                            readonly type: "array";
                            readonly description: "EAN Codes per each item. (Used for Scanner Integration) Separated by commas. Example: ['2000125','20021215','54545454'] minimum 1 item. Barcodes can't be null";
                            readonly items: {};
                        };
                        readonly weight: {
                            readonly type: "number";
                            readonly description: "Should be specified in kilograms (kg)";
                        };
                        readonly volume: {
                            readonly type: "number";
                            readonly description: "Should be specified in liters (L)";
                        };
                        readonly price: {
                            readonly type: "number";
                        };
                        readonly comment: {
                            readonly type: "string";
                        };
                        readonly attributes: {
                            readonly properties: {
                                readonly category: {
                                    readonly type: "string";
                                };
                                readonly plu: {
                                    readonly type: "string";
                                };
                                readonly ean: {
                                    readonly type: "string";
                                    readonly description: "This value will be rendered on Control Tower.";
                                };
                                readonly location: {
                                    readonly type: "string";
                                    readonly description: "The picker will see a tag indicating the product's location in the store.";
                                };
                                readonly picking_index: {
                                    readonly type: "string";
                                    readonly pattern: "^[0-9]+$";
                                    readonly description: "A number that will be used to order the products in the shopper app. In the case that is also sent the category or Location and these are configured in the database, the Shopper App will take the values of the Category or Location for its ordering.";
                                };
                            };
                            readonly type: "object";
                        };
                    };
                    readonly required: readonly ["id", "name", "unit", "quantity", "sub_unit", "sub_quantity", "price", "attributes"];
                };
            };
        };
        readonly required: readonly ["currency_code", "start", "end", "slot_size", "operational_models_priority", "origin", "destination", "job_items", "store_reference"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "JWT token";
                    };
                    readonly from: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly to: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly store: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "The value could be `NOT_APPLICABLE` or `FALLBACK` (if the field 'fallback' = true).";
                    };
                    readonly operational_model: {
                        readonly type: "string";
                        readonly enum: readonly ["PICK_AND_DELIVERY", "PICK_AND_DELIVERY_WITH_STORAGE", "PICK_AND_COLLECT", "FULL_SERVICE"];
                        readonly description: "`PICK_AND_DELIVERY` `PICK_AND_DELIVERY_WITH_STORAGE` `PICK_AND_COLLECT` `FULL_SERVICE`";
                    };
                    readonly expires_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                        readonly description: "Expiration date for the slot. Slots are dynamic and they are reserved for a specific amount of time.";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Malformed payload";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Missing attributes";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostJobsItems: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly job_id: {
                readonly type: "string";
                readonly format: "uuid";
                readonly description: "The job's id.";
            };
            readonly items: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly photo_url: {
                            readonly type: "string";
                        };
                        readonly unit: {
                            readonly type: "string";
                            readonly description: "For standard units of measure use UCUM base units. Otherwise, it will be considered as a custom unit.";
                        };
                        readonly sub_unit: {
                            readonly type: "string";
                            readonly description: "For standard units of measure use UCUM base units. Otherwise, it will be considered as a custom unit.";
                        };
                        readonly quantity: {
                            readonly type: "number";
                        };
                        readonly sub_quantity: {
                            readonly type: "number";
                        };
                        readonly quantity_found_limits: {
                            readonly description: "You can define the maximum and minimum quantity of the product that can be picked. This will allow restricting the quantities of the product that can be carried according to promotions or business decisions. `These parameters will take precedence over the global parameters.`";
                            readonly properties: {
                                readonly max: {
                                    readonly type: "number";
                                    readonly description: "Quantity of product in the unit defined above, which restricts the collector the maximum that he can select from a product.";
                                };
                                readonly min: {
                                    readonly type: "number";
                                    readonly description: "Quantity of product in the unit defined above, which restricts the collector the minimum that he can select from a product.";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly barcodes: {
                            readonly type: "array";
                            readonly description: "EAN Codes per each item. (Used for Scanner Integration) Separated by commas. Example: ['2000125','20021215','54545454'] minimum 1 item. Barcodes can't be null";
                            readonly items: {};
                        };
                        readonly weight: {
                            readonly type: "number";
                            readonly description: "Should be specified in kilograms (kg)";
                        };
                        readonly volume: {
                            readonly type: "number";
                            readonly description: "Should be specified in liters (L)";
                        };
                        readonly price: {
                            readonly type: "number";
                        };
                        readonly comment: {
                            readonly type: "string";
                        };
                        readonly attributes: {
                            readonly properties: {
                                readonly category: {
                                    readonly type: "string";
                                };
                                readonly plu: {
                                    readonly type: "string";
                                };
                                readonly ean: {
                                    readonly type: "string";
                                    readonly description: "This value will be rendered on Control Tower.";
                                };
                                readonly location: {
                                    readonly type: "string";
                                    readonly description: "The picker will see a tag indicating the product's location in the store.";
                                };
                                readonly picking_index: {
                                    readonly type: "string";
                                    readonly pattern: "^[0-9]+$";
                                    readonly description: "A number that will be used to order the products in the shopper app. In the case that is also sent the category or Location and these are configured in the database, the Shopper App will take the values of the Category or Location for its ordering.";
                                };
                            };
                            readonly type: "object";
                        };
                    };
                    readonly required: readonly ["id", "name", "unit", "quantity", "sub_unit", "sub_quantity", "price", "attributes"];
                };
            };
        };
        readonly required: readonly ["job_id", "items"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly job_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
                readonly items_ids: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly format: "uuid";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Malformed payload";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Missing attributes";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostJobsJobidItems: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly item_to_add: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly photo_url: {
                        readonly type: "string";
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly description: "For standard units of measure use UCUM base units. Otherwise, it will be considered as a custom unit.";
                    };
                    readonly sub_unit: {
                        readonly type: "string";
                        readonly description: "For standard units of measure use UCUM base units. Otherwise, it will be considered as a custom unit.";
                    };
                    readonly quantity: {
                        readonly type: "number";
                    };
                    readonly sub_quantity: {
                        readonly type: "number";
                    };
                    readonly quantity_found_limits: {
                        readonly description: "You can define the maximum and minimum quantity of the product that can be picked. This will allow restricting the quantities of the product that can be carried according to promotions or business decisions. `These parameters will take precedence over the global parameters.`";
                        readonly properties: {
                            readonly max: {
                                readonly type: "number";
                                readonly description: "Quantity of product in the unit defined above, which restricts the collector the maximum that he can select from a product.";
                            };
                            readonly min: {
                                readonly type: "number";
                                readonly description: "Quantity of product in the unit defined above, which restricts the collector the minimum that he can select from a product.";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly barcodes: {
                        readonly type: "array";
                        readonly description: "EAN Codes per each item. (Used for Scanner Integration) Separated by commas. Example: ['2000125','20021215','54545454'] minimum 1 item. Barcodes can't be null";
                        readonly items: {};
                    };
                    readonly weight: {
                        readonly type: "number";
                        readonly description: "Should be specified in kilograms (kg)";
                    };
                    readonly volume: {
                        readonly type: "number";
                        readonly description: "Should be specified in liters (L)";
                    };
                    readonly price: {
                        readonly type: "number";
                    };
                    readonly comment: {
                        readonly type: "string";
                    };
                    readonly attributes: {
                        readonly properties: {
                            readonly category: {
                                readonly type: "string";
                            };
                            readonly plu: {
                                readonly type: "string";
                            };
                            readonly ean: {
                                readonly type: "string";
                                readonly description: "This value will be rendered on Control Tower.";
                            };
                            readonly location: {
                                readonly type: "string";
                                readonly description: "The picker will see a tag indicating the product's location in the store.";
                            };
                            readonly picking_index: {
                                readonly type: "string";
                                readonly pattern: "^[0-9]+$";
                                readonly description: "A number that will be used to order the products in the shopper app. In the case that is also sent the category or Location and these are configured in the database, the Shopper App will take the values of the Category or Location for its ordering.";
                            };
                        };
                        readonly type: "object";
                    };
                };
                readonly required: readonly ["id", "name", "unit", "quantity", "sub_unit", "sub_quantity", "price", "attributes"];
            };
        };
        readonly required: readonly ["item_to_add"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The existing Job ID.";
                };
            };
            readonly required: readonly ["jobId"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly description: "JWT token";
                };
                readonly itemId: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Missing attributes";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPackagesCreateJobid: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly resource_id: {
                readonly type: "string";
            };
            readonly packages: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly reference: {
                            readonly type: "string";
                        };
                        readonly department: {
                            readonly type: "string";
                        };
                    };
                    readonly type: "object";
                };
            };
        };
        readonly required: readonly ["packages"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["jobId"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly package_ids: {
                    readonly type: "array";
                    readonly items: {};
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Error creating packages";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutJobsJobidCustomFlag: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly reason: {
                readonly type: "string";
                readonly description: "Describes why the flag was created.";
            };
        };
        readonly required: readonly ["reason"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["jobId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly flag_id: {
                    readonly type: "number";
                    readonly description: "Unique identifier of the flag.";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "UTC date / [ISO - 8601](https://es.wikipedia.org/wiki/ISO_8601).";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Missing attributes";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutJobsJobidExternalData: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly external_data: {
                readonly type: "object";
                readonly description: "The new external data for the existing Job.";
                readonly properties: {
                    readonly webhook: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly backoffice: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                    readonly shopper_app: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
            };
        };
        readonly required: readonly ["external_data"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The existing Job ID.";
                };
            };
            readonly required: readonly ["jobId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "EXTERNAL_DATA_UPDATED_SUCCESSFULLY";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                    readonly description: "Access forbidden. Please provide a valid API token";
                    readonly examples: readonly ["Access forbidden. Please provide a valid API token"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutJobsJobidItemsItemref: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly values: {
                readonly type: "object";
                readonly description: "The object with the attributes of the item that you want to update";
                readonly properties: {
                    readonly state: {
                        readonly type: "string";
                        readonly description: "State of the item. Send CANCELLED to cancel an existing item inside a Job";
                    };
                    readonly quantity: {
                        readonly type: "number";
                        readonly description: "Quantity of the item";
                    };
                    readonly comment: {
                        readonly type: "string";
                        readonly description: "Comment of the item";
                    };
                };
            };
        };
        readonly required: readonly ["values"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The existing Job ID";
                };
                readonly itemRef: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Your internal Reference of the item";
                };
            };
            readonly required: readonly ["jobId", "itemRef"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                };
                readonly itemId: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly properties: {
                        readonly location: {
                            readonly type: "string";
                            readonly description: "Error's location";
                        };
                        readonly param: {
                            readonly type: "string";
                        };
                        readonly value: {
                            readonly type: "string";
                        };
                        readonly msg: {
                            readonly type: "string";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutJobsJobidJobComment: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly job_comment: {
                readonly type: "string";
                readonly description: "The new comment for the existing Job.";
            };
        };
        readonly required: readonly ["job_comment"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The existing Job ID.";
                };
            };
            readonly required: readonly ["jobId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                };
                readonly comment: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly errors: {
                    readonly properties: {
                        readonly location: {
                            readonly type: "string";
                            readonly description: "Error's location";
                        };
                        readonly param: {
                            readonly type: "string";
                        };
                        readonly value: {
                            readonly type: "string";
                        };
                        readonly msg: {
                            readonly type: "string";
                        };
                    };
                    readonly type: "object";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutJobsJobidPaymentInfo: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly prices: {
                readonly type: "object";
                readonly properties: {
                    readonly subtotal: {
                        readonly type: "number";
                        readonly description: "Subtotal of the goods. Without taxes, discounts or shipping_fee.";
                    };
                    readonly shipping_fee: {
                        readonly type: "number";
                        readonly description: "Fee charged to the customer for the shipping of goods.";
                    };
                    readonly discounts: {
                        readonly type: "number";
                        readonly description: "Discounts applied to the customer.";
                    };
                    readonly taxes: {
                        readonly type: "number";
                        readonly description: "Taxes charged to the customer.";
                    };
                    readonly order_value: {
                        readonly type: "number";
                        readonly description: "The value to be paid for the order, it includes the price of the goods, taxes, discounts and shipping_fee.";
                    };
                    readonly attributes: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly enum: readonly ["ORDER_VALUE", "SHIPPING_FEE", "TAXES", "DISCOUNTS", "SUBTOTAL"];
                                };
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly value: {
                                    readonly type: "number";
                                };
                            };
                            readonly description: "Add here details of each item that is within the prices. Specify here if there is more than one value in any item. I.e, If the invoice charges a total of 100 in taxes divided in two subtypes, there will be two items, describing each fee, each one with a name and value";
                            readonly required: readonly ["type", "name", "value"];
                        };
                    };
                    readonly additional_info: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                };
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly value: {
                                    readonly type: "number";
                                };
                            };
                            readonly description: "Additional informacion about prices in the current job.";
                        };
                    };
                };
                readonly required: readonly ["subtotal", "shipping_fee", "discounts", "taxes", "order_value", "attributes"];
            };
            readonly payment: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly description: "Internal Client ID of the payment type.";
                        readonly type: readonly ["string", "null"];
                    };
                    readonly payment_status: {
                        readonly type: "string";
                        readonly enum: readonly ["FAILED", "SUCCEEDED", "CHANGED", "IN_PROGRESS", "REVERTED"];
                        readonly description: "Status of the payment. It could be one of these 5 values: 1. 'FAILED': When the total payment of the order fails. If it is reported that the payment was failed, our system will automatically raise a flag in the order so that it can be resolved by an agent from the control tower. 2. 'SUCCEEDED': When the full payment of the order is successful. If you have a payment confirmation lock activated, when you receive this status, the Shopper App is unlocked. 3. 'CHANGED': Payment information has changed. 4. 'IN_PROGRESS': The payment is in progress. 5. 'REVERTED': The payment was completely reverted";
                    };
                    readonly method: {
                        readonly type: "string";
                        readonly enum: readonly ["CASH", "PREPAID", "PAYMENT_TERMINAL", "LOYALTY_CARD", "PAYMENT_LINK", "TRANSFER"];
                        readonly description: "Defines the payment method intended to be used by the user. Options are PREPAID, CASH, PAYMENT_TERMINAL, LOYALTY_CARD, PAYMENT_LINK and TRANSFER (used in the picker app to get special prices from your catalogue).";
                    };
                    readonly reference: {
                        readonly description: "Provide an identifier for the credit card. In case of credit/debit cards include the last 4 numbers registered for it (for example, VISA *3939).";
                        readonly type: readonly ["string", "null"];
                    };
                    readonly value: {
                        readonly type: "number";
                        readonly description: "Amount to be paid";
                    };
                    readonly payment_status_details: {
                        readonly type: "string";
                        readonly description: "Extra details of the payment status";
                    };
                    readonly method_details: {
                        readonly type: "string";
                        readonly description: "Extra details of the payment method";
                    };
                    readonly blocking_policy: {
                        readonly type: "string";
                        readonly description: "Desired Blocking Policy";
                        readonly enum: readonly ["CHECKOUT", "EXIT_STORE", "UNBLOCKED"];
                    };
                    readonly metadata: {
                        readonly type: "object";
                        readonly maxLength: 1000;
                        readonly description: "Json object to add details or relevant information about the payment being processed";
                        readonly additionalProperties: true;
                    };
                };
                readonly required: readonly ["id", "payment_status", "method", "reference", "value"];
            };
            readonly invoice: {
                readonly type: "object";
                readonly properties: {
                    readonly reference: {
                        readonly type: "string";
                        readonly description: "Invoice number or reference.";
                    };
                    readonly attachments: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly description: "(Optional) Array of URL's related to the PDF/Images to find the invoice on your systems.";
                    };
                };
                readonly required: readonly ["reference", "attachments"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["jobId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly currencyCode: {
                    readonly type: "string";
                };
                readonly prices: {
                    readonly type: "object";
                    readonly properties: {
                        readonly subtotal: {
                            readonly type: "number";
                            readonly description: "Subtotal of the goods. Without taxes, discounts or shipping_fee.";
                        };
                        readonly shippingFee: {
                            readonly type: "number";
                            readonly description: "Fee charged to the customer for the shipping of goods.";
                        };
                        readonly discounts: {
                            readonly type: "number";
                            readonly description: "Discounts applied to the customer.";
                        };
                        readonly taxes: {
                            readonly type: "number";
                            readonly description: "Taxes charged to the customer.";
                        };
                        readonly order_value: {
                            readonly type: "number";
                            readonly description: "The value to be paid for the order, it includes the price of the goods, taxes, discounts and shipping_fee.";
                        };
                        readonly attributes: {
                            readonly type: "array";
                            readonly items: {
                                readonly anyOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["ORDER_VALUE", "SHIPPING_FEE", "TAXES", "DISCOUNTS", "SUBTOTAL"];
                                            readonly description: "`ORDER_VALUE` `SHIPPING_FEE` `TAXES` `DISCOUNTS` `SUBTOTAL`";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly type: "number";
                                        };
                                    };
                                    readonly description: "Add here details of each item that is within the prices. Specify here if there is more than one value in any item. I.e, If the invoice charges a total of 100 in taxes divided in two subtypes, there will be two items, describing each fee, each one with a name and value";
                                    readonly required: readonly ["type", "name", "value"];
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly type: "number";
                                        };
                                    };
                                    readonly required: readonly ["type", "name", "value"];
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly type: "number";
                                        };
                                    };
                                    readonly required: readonly ["type", "name", "value"];
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly type: "number";
                                        };
                                    };
                                    readonly required: readonly ["type", "name", "value"];
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly type: "number";
                                        };
                                    };
                                    readonly required: readonly ["type", "name", "value"];
                                }];
                            };
                        };
                    };
                };
                readonly payment: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly description: "Internal Client ID of the payment type.";
                            readonly type: readonly ["string", "null"];
                        };
                        readonly payment_status: {
                            readonly type: "string";
                            readonly enum: readonly ["FAILED", "SUCCEEDED", "CHANGED", "IN_PROGRESS", "REVERTED"];
                            readonly description: "Status of the payment. It could be one of these 5 values: 1. 'FAILED': When the total payment of the order fails. If it is reported that the payment was failed, our system will automatically raise a flag in the order so that it can be resolved by an agent from the control tower. 2. 'SUCCEEDED': When the full payment of the order is successful. If you have a payment confirmation lock activated, when you receive this status, the Shopper App is unlocked. 3. 'CHANGED': Payment information has changed. 4. 'IN_PROGRESS': The payment is in progress. 5. 'REVERTED': The payment was completely reverted\n\n`FAILED` `SUCCEEDED` `CHANGED` `IN_PROGRESS` `REVERTED`";
                        };
                        readonly method: {
                            readonly type: "string";
                            readonly enum: readonly ["CASH", "PREPAID", "PAYMENT_TERMINAL", "LOYALTY_CARD", "PAYMENT_LINK", "TRANSFER"];
                            readonly description: "Defines the payment method intended to be used by the user. Options are PREPAID, CASH, PAYMENT_TERMINAL, LOYALTY_CARD, PAYMENT_LINK and TRANSFER (used in the picker app to get special prices from your catalogue).\n\n`CASH` `PREPAID` `PAYMENT_TERMINAL` `LOYALTY_CARD` `PAYMENT_LINK` `TRANSFER`";
                        };
                        readonly reference: {
                            readonly description: "Provide an identifier for the credit card. In case of credit/debit cards include the last 4 numbers registered for it (for example, VISA *3939).";
                            readonly type: readonly ["string", "null"];
                        };
                        readonly value: {
                            readonly type: "number";
                            readonly description: "Amount to be paid";
                        };
                        readonly payment_status_details: {
                            readonly type: "string";
                            readonly description: "Extra details of the payment status";
                        };
                        readonly method_details: {
                            readonly type: "string";
                            readonly description: "Extra details of the payment method";
                        };
                        readonly blocking_policy: {
                            readonly type: "string";
                            readonly description: "Desired Blocking Policy\n\n`CHECKOUT` `EXIT_STORE` `UNBLOCKED`";
                            readonly enum: readonly ["CHECKOUT", "EXIT_STORE", "UNBLOCKED"];
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly description: "Json object to add details or relevant information about the payment being processed";
                            readonly additionalProperties: true;
                        };
                    };
                };
                readonly invoice: {
                    readonly properties: {
                        readonly reference: {
                            readonly type: "string";
                            readonly description: "Invoice number or reference.";
                        };
                        readonly attachments: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "Array of URL's related to the PDF/Images to find the invoice on your systems.";
                        };
                    };
                    readonly type: readonly ["object", "null"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly type: "boolean";
                    readonly default: false;
                };
                readonly message: {
                    readonly type: "string";
                    readonly default: "Please check the payload sent to avoid this error";
                };
                readonly error: {
                    readonly type: "string";
                    readonly default: "Invalid request, there are some errors with the payload sent";
                };
                readonly validationErrors: {
                    readonly type: "object";
                    readonly properties: {
                        readonly keyword: {
                            readonly type: "string";
                            readonly default: "required";
                        };
                        readonly dataPath: {
                            readonly type: "string";
                            readonly description: "The path of the invalid property";
                            readonly examples: readonly [".payment"];
                        };
                        readonly schemaPath: {
                            readonly type: "string";
                        };
                        readonly params: {
                            readonly type: "object";
                            readonly properties: {
                                readonly missingProperty: {
                                    readonly type: "string";
                                    readonly description: "The property name";
                                    readonly examples: readonly ["id"];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutJobsJobidReportFraud: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly reason: {
                readonly type: "string";
                readonly description: "Describes why the flag was created.";
            };
        };
        readonly required: readonly ["reason"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["jobId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly flag_id: {
                    readonly type: "number";
                    readonly description: "Unique identifier of the flag.";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "UTC date / [ISO - 8601](https://es.wikipedia.org/wiki/ISO_8601).";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Missing attributes";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PutJobsSlotidExtendExpirationTime: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly slotId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["slotId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly slotId: {
                            readonly type: "string";
                            readonly format: "uuid";
                        };
                        readonly expires_at: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "Expiration date for the slot. Slots are dynamic and they are reserved for a specific amount of time.";
                        };
                    };
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["EXPIRATION_UPDATED_SUCCESSFULLY"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Access forbidden. Client has not been configured yet";
                    readonly examples: readonly ["Access forbidden. Client has not been configured yet"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "422": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly default: "Missing attributes";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteJobsItems, DeleteJobsJobidCancel, GetJobsAvailabilitySlotidCheck, GetJobsJobid, PostJobs, PostJobsAvailabilityV2, PostJobsItems, PostJobsJobidItems, PostPackagesCreateJobid, PutJobsJobidCustomFlag, PutJobsJobidExternalData, PutJobsJobidItemsItemref, PutJobsJobidJobComment, PutJobsJobidPaymentInfo, PutJobsJobidReportFraud, PutJobsSlotidExtendExpirationTime };
