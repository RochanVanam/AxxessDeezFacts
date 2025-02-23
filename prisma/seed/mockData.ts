import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('8c8d3ea2-3528-4f45-8305-794e9b903a42', '1Summer.Becker44@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv44556', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('acca4155-f877-4e7f-a48f-e1a7a98b132b', '9Victor71@yahoo.com', 'Emily Clark', 'https://i.imgur.com/YfJQV5z.png?id=11', 'inv12345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('7e0e3a1c-7836-46c3-a068-7add1ed54caf', '17Wayne_Kuhn@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=19', 'inv67890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('27530eee-5667-440c-82ef-2defc3ffec19', '25Rachael85@yahoo.com', 'Emily Clark', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inv44556', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('0d683e0b-ac84-41ce-bce4-624a0f00ccb9', '41Maynard_Orn27@yahoo.com', 'Michael Jordan', 'https://i.imgur.com/YfJQV5z.png?id=43', 'inv12345', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('3ec65c18-7bfe-4280-9e0f-07ee939beca5', '49Cordie25@yahoo.com', 'Emily Clark', 'https://i.imgur.com/YfJQV5z.png?id=51', 'inv44556', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('b6036bc1-cf54-4c49-8ad8-9dadc0880156', '57Marshall_Stamm@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=59', 'inv67890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a7d61c49-7b1a-4fdf-b3c0-55dde8b5232d', '65Olin_Roberts@yahoo.com', 'David Lee', 'https://i.imgur.com/YfJQV5z.png?id=67', 'inv67890', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('cffb5139-ab5f-4933-84d5-864cd5748545', '73Kristoffer.Dietrich@gmail.com', 'Michael Jordan', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv11223', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('c07a9c0d-5e84-42cb-92c5-bc43ca74050c', 'PrimeCare Associates', 'https://i.imgur.com/YfJQV5z.png?id=82');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a59ec50d-db98-46b1-90c0-a1e414c04f10', 'HealthFirst Clinic', 'https://i.imgur.com/YfJQV5z.png?id=85');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('f0ed4da2-8ad6-4e2c-84a1-95c9740f2e48', 'Pinnacle Health Services', 'https://i.imgur.com/YfJQV5z.png?id=88');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b51d1ef0-1e20-4ebc-8729-964cf539dfd7', 'Family Health Partners', 'https://i.imgur.com/YfJQV5z.png?id=91');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('60a3d67c-2e57-429d-836f-6cec62a4a7af', 'Family Health Partners', 'https://i.imgur.com/YfJQV5z.png?id=94');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e803a7a8-d283-4603-8d7c-bc0f91ec9b10', 'HealthFirst Clinic', 'https://i.imgur.com/YfJQV5z.png?id=97');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('661c7954-76c3-452a-b0c4-5fc8b63fa145', 'Pinnacle Health Services', 'https://i.imgur.com/YfJQV5z.png?id=100');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('c22ad8bc-198e-4785-b51b-7de8e5ceb8b3', 'WellCare Medical Group', 'https://i.imgur.com/YfJQV5z.png?id=103');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('236dd106-a725-46ad-8167-c93795b1e60d', 'Family Health Partners', 'https://i.imgur.com/YfJQV5z.png?id=106');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('4bd04aa7-61b2-4c6e-915b-c2f54e07144f', 'Family Health Partners', 'https://i.imgur.com/YfJQV5z.png?id=109');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('f0039da9-aa9e-4c68-9de9-4dd59da017d6', 'Clinical Coordinator', 'b6036bc1-cf54-4c49-8ad8-9dadc0880156', '60a3d67c-2e57-429d-836f-6cec62a4a7af');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('336d1b45-ae2f-405b-bfd8-9fe03bffe3ef', 'Medical Assistant', 'a7d61c49-7b1a-4fdf-b3c0-55dde8b5232d', 'a59ec50d-db98-46b1-90c0-a1e414c04f10');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('bbccb5d0-8f2b-4241-84d1-cf4b824b41ed', 'Clinical Coordinator', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b51d1ef0-1e20-4ebc-8729-964cf539dfd7');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('58f82b8f-1b28-4eab-8da8-39817db8e36a', 'Administrator', '7e0e3a1c-7836-46c3-a068-7add1ed54caf', 'e803a7a8-d283-4603-8d7c-bc0f91ec9b10');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('85dc7c3e-bcc7-4317-b627-8b7db40f8c2e', 'Medical Assistant', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b51d1ef0-1e20-4ebc-8729-964cf539dfd7');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('bb2be0ee-e6a1-47d5-984e-5885b48c0c53', 'Administrator', '0d683e0b-ac84-41ce-bce4-624a0f00ccb9', 'a59ec50d-db98-46b1-90c0-a1e414c04f10');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('b08506ca-619e-479a-acaa-a1a011026a4b', 'Pharmacist', '7e0e3a1c-7836-46c3-a068-7add1ed54caf', 'f0ed4da2-8ad6-4e2c-84a1-95c9740f2e48');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('7b1fb61f-cad1-41f0-8df5-795d7e823ded', 'Medical Assistant', '7e0e3a1c-7836-46c3-a068-7add1ed54caf', '236dd106-a725-46ad-8167-c93795b1e60d');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('fdf630c9-653f-44b4-8751-fb970ee305f1', 'Pharmacist', 'b6036bc1-cf54-4c49-8ad8-9dadc0880156', 'c07a9c0d-5e84-42cb-92c5-bc43ca74050c');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('b19dcb7f-5e49-4841-a455-0498ed786dfa', 'Administrator', 'a7d61c49-7b1a-4fdf-b3c0-55dde8b5232d', '661c7954-76c3-452a-b0c4-5fc8b63fa145');

INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('94a459bd-cd7f-4ed8-98f4-edcadc685124', 'Monthly medication reorder reminders', '3ec65c18-7bfe-4280-9e0f-07ee939beca5');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('09c0cbf1-85de-4f95-a19a-0aff3efd4217', 'Monthly medication reorder reminders', 'b6036bc1-cf54-4c49-8ad8-9dadc0880156');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('8715f059-48bd-427b-9b36-514f8fe22d72', 'Monthly medication reorder reminders', '8c8d3ea2-3528-4f45-8305-794e9b903a42');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('8f8de2e2-e3a2-433b-b6a9-975e7c3e90c8', 'Monthly medication reorder reminders', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('b8be1f40-6a8b-4ca2-b231-18ebd2b2ee88', 'Daily patient monitoring alerts', '3ec65c18-7bfe-4280-9e0f-07ee939beca5');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('06a3e585-ae78-4392-ac13-d7f8f503dce4', 'Daily patient monitoring alerts', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('72e59bba-0eff-460a-acf3-66b77f91dc3b', 'Biweekly inventory management insights', '3ec65c18-7bfe-4280-9e0f-07ee939beca5');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('a1558814-da26-4a82-b0da-b062d8515725', 'Quarterly healthcare news and trends', '27530eee-5667-440c-82ef-2defc3ffec19');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('23e6ba84-54a4-4aec-b5c9-b0c7d87c4173', 'Daily patient monitoring alerts', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PwaSubscription" ("id", "content", "userId") VALUES ('87dd5cee-6ea0-4240-8b42-fb414fe9f5a8', 'Weekly health tips and updates', '0d683e0b-ac84-41ce-bce4-624a0f00ccb9');

INSERT INTO "Patient" ("id", "firstName", "lastName", "dateOfBirth", "gender", "phone", "email", "address", "organizationId", "height", "weight", "conditions") VALUES ('6d22299e-bc0e-46fb-9515-d280215c537a', 'Sophia', 'Smith', '2024-12-28T17:55:21.689Z', 'Female', '5551234567', '156Lera.Hagenes-Stark20@yahoo.com', '157 136 E 13th St, New York, NY 10003', 'a59ec50d-db98-46b1-90c0-a1e414c04f10', '55', '120 lbs', 'Diabetes');
INSERT INTO "Patient" ("id", "firstName", "lastName", "dateOfBirth", "gender", "phone", "email", "address", "organizationId", "height", "weight", "conditions") VALUES ('f602641d-22d3-4498-b6b6-0eb1d280583c', 'Sophia', 'Brown', '2025-02-03T11:55:14.684Z', 'Female', '4445556666', '167Assunta_Davis59@hotmail.com', '168 18 Spring St, New York, NY 10012', 'f0ed4da2-8ad6-4e2c-84a1-95c9740f2e48', '54', '180 lbs', 'Hypertension');
INSERT INTO "Patient" ("id", "firstName", "lastName", "dateOfBirth", "gender", "phone", "email", "address", "organizationId", "height", "weight", "conditions") VALUES ('e9c582b8-3ea1-4228-beed-7ce215c92b20', 'Sophia', 'Smith', '2025-02-16T20:33:23.455Z', 'Female', '1234567890', '178Amina71@yahoo.com', '179 91 Christopher St, New York, NY 10014', '60a3d67c-2e57-429d-836f-6cec62a4a7af', '54', '140 lbs', 'Arthritis');
INSERT INTO "Patient" ("id", "firstName", "lastName", "dateOfBirth", "gender", "phone", "email", "address", "organizationId", "height", "weight", "conditions") VALUES ('dc574907-b959-4a5c-84e3-ef16b43cc10a', 'John', 'Williams', '2024-12-17T20:23:49.041Z', 'Female', '9876543210', '189Kasandra94@gmail.com', '190 330 W Broadway, New York, NY 10013', '4bd04aa7-61b2-4c6e-915b-c2f54e07144f', '61', '140 lbs', 'Hypertension');
INSERT INTO "Patient" ("id", "firstName", "lastName", "dateOfBirth", "gender", "phone", "email", "address", "organizationId", "height", "weight", "conditions") VALUES ('e0ed00fb-b8ba-4756-8351-36c178176398', 'Sophia', 'Brown', '2024-09-09T05:24:11.444Z', 'Male', '1234567890', '200Jamarcus_Stokes25@gmail.com', '201 136 E 13th St, New York, NY 10003', 'f0ed4da2-8ad6-4e2c-84a1-95c9740f2e48', '59', '160 lbs', 'Diabetes');
INSERT INTO "Patient" ("id", "firstName", "lastName", "dateOfBirth", "gender", "phone", "email", "address", "organizationId", "height", "weight", "conditions") VALUES ('eb8d7759-c86a-44f0-8907-b7c27339d1f3', 'Emily', 'Brown', '2026-01-21T06:51:31.423Z', 'Male', '4445556666', '211Laverna_Haag@yahoo.com', '212 18 Spring St, New York, NY 10012', '661c7954-76c3-452a-b0c4-5fc8b63fa145', '54', '130 lbs', 'Hypertension');
INSERT INTO "Patient" ("id", "firstName", "lastName", "dateOfBirth", "gender", "phone", "email", "address", "organizationId", "height", "weight", "conditions") VALUES ('49b8df60-68cd-4535-b3bd-e9ae57b939ff', 'John', 'Smith', '2025-10-23T18:41:30.384Z', 'Male', '4445556666', '222Walker_Treutel@yahoo.com', '223 330 W Broadway, New York, NY 10013', 'c22ad8bc-198e-4785-b51b-7de8e5ceb8b3', '61', '130 lbs', 'Arthritis');
INSERT INTO "Patient" ("id", "firstName", "lastName", "dateOfBirth", "gender", "phone", "email", "address", "organizationId", "height", "weight", "conditions") VALUES ('5b65bd89-1cc3-4c3a-90d1-2733de04c7af', 'Sophia', 'Smith', '2024-09-16T14:30:39.193Z', 'Male', '5551234567', '233Dianna.Erdman@hotmail.com', '234 443 E 6th St, New York, NY 10009', '60a3d67c-2e57-429d-836f-6cec62a4a7af', '57', '120 lbs', 'Hypertension');
INSERT INTO "Patient" ("id", "firstName", "lastName", "dateOfBirth", "gender", "phone", "email", "address", "organizationId", "height", "weight", "conditions") VALUES ('b8746bca-27e5-415a-9487-d3262ab9a0b8', 'Michael', 'Johnson', '2025-10-14T15:33:20.654Z', 'Female', '9876543210', '244Theron_Rowe@yahoo.com', '245 443 E 6th St, New York, NY 10009', '4bd04aa7-61b2-4c6e-915b-c2f54e07144f', '55', '160 lbs', 'Asthma');
INSERT INTO "Patient" ("id", "firstName", "lastName", "dateOfBirth", "gender", "phone", "email", "address", "organizationId", "height", "weight", "conditions") VALUES ('d42a85c2-47e5-4726-9d82-61117fd72025', 'David', 'Williams', '2025-07-27T09:00:15.581Z', 'Female', '5551234567', '255Trenton88@yahoo.com', '256 136 E 13th St, New York, NY 10003', 'c07a9c0d-5e84-42cb-92c5-bc43ca74050c', '54', '130 lbs', 'Hypertension');

INSERT INTO "Medication" ("id", "name", "description", "currentStock", "reorderThreshold", "recommendedQuantity", "organizationId") VALUES ('c05e4e3c-cb93-4347-a031-1a0cd37fa062', 'Lisinopril', 'Cholesterollowering medication', 42, 867, 719, 'b51d1ef0-1e20-4ebc-8729-964cf539dfd7');
INSERT INTO "Medication" ("id", "name", "description", "currentStock", "reorderThreshold", "recommendedQuantity", "organizationId") VALUES ('fa427049-96c9-4712-b111-ea5e1e97e18b', 'Atorvastatin', 'Used to control high blood sugar', 400, 832, 937, '236dd106-a725-46ad-8167-c93795b1e60d');
INSERT INTO "Medication" ("id", "name", "description", "currentStock", "reorderThreshold", "recommendedQuantity", "organizationId") VALUES ('9bed6b5a-40a7-4858-938c-08389b76b6f6', 'Metformin', 'Cholesterollowering medication', 854, 929, 144, 'c22ad8bc-198e-4785-b51b-7de8e5ceb8b3');
INSERT INTO "Medication" ("id", "name", "description", "currentStock", "reorderThreshold", "recommendedQuantity", "organizationId") VALUES ('98cf07be-b3e8-42b6-8a94-e4d0373aa69a', 'Lisinopril', 'Pain reliever and antiinflammatory', 454, 746, 79, 'b51d1ef0-1e20-4ebc-8729-964cf539dfd7');
INSERT INTO "Medication" ("id", "name", "description", "currentStock", "reorderThreshold", "recommendedQuantity", "organizationId") VALUES ('6fee1333-20ed-4ad2-bff5-1cf47bc13567', 'Metformin', 'Used to treat high blood pressure', 708, 441, 879, 'c22ad8bc-198e-4785-b51b-7de8e5ceb8b3');
INSERT INTO "Medication" ("id", "name", "description", "currentStock", "reorderThreshold", "recommendedQuantity", "organizationId") VALUES ('4c17225c-b78c-49a8-a9bd-c292ce7d0dd7', 'Atorvastatin', 'Pain reliever and antiinflammatory', 670, 78, 401, '60a3d67c-2e57-429d-836f-6cec62a4a7af');
INSERT INTO "Medication" ("id", "name", "description", "currentStock", "reorderThreshold", "recommendedQuantity", "organizationId") VALUES ('5d8b1fb4-6835-40cc-ab64-55b0dabe4414', 'Ibuprofen', 'Antibiotic used to treat various infections', 546, 887, 526, 'a59ec50d-db98-46b1-90c0-a1e414c04f10');
INSERT INTO "Medication" ("id", "name", "description", "currentStock", "reorderThreshold", "recommendedQuantity", "organizationId") VALUES ('0f909d18-c129-4a13-aed5-f27a08c4f56e', 'Amoxicillin', 'Antibiotic used to treat various infections', 980, 374, 716, '661c7954-76c3-452a-b0c4-5fc8b63fa145');
INSERT INTO "Medication" ("id", "name", "description", "currentStock", "reorderThreshold", "recommendedQuantity", "organizationId") VALUES ('d6ad3984-8b18-4123-8052-2bab811ee88f', 'Atorvastatin', 'Used to control high blood sugar', 436, 406, 839, '236dd106-a725-46ad-8167-c93795b1e60d');
INSERT INTO "Medication" ("id", "name", "description", "currentStock", "reorderThreshold", "recommendedQuantity", "organizationId") VALUES ('8885e482-8d4e-4d02-b577-6a271b06c621', 'Atorvastatin', 'Antibiotic used to treat various infections', 367, 312, 467, 'c07a9c0d-5e84-42cb-92c5-bc43ca74050c');

INSERT INTO "Prescription" ("id", "dosage", "frequency", "startDate", "endDate", "status", "patientId", "medicationId") VALUES ('4160e9ce-849a-4bc8-b12d-114f5d4f338e', '1000mg', 'Every 6 hours', '2025-09-30T03:06:14.314Z', '2024-03-10T05:48:59.859Z', 'Discontinued', 'e0ed00fb-b8ba-4756-8351-36c178176398', '8885e482-8d4e-4d02-b577-6a271b06c621');
INSERT INTO "Prescription" ("id", "dosage", "frequency", "startDate", "endDate", "status", "patientId", "medicationId") VALUES ('c323785f-73bb-44ac-8b84-d146fd17cd24', '10mg', 'Every 6 hours', '2024-12-18T10:02:03.809Z', '2024-10-01T01:52:10.093Z', 'On hold', 'b8746bca-27e5-415a-9487-d3262ab9a0b8', 'd6ad3984-8b18-4123-8052-2bab811ee88f');
INSERT INTO "Prescription" ("id", "dosage", "frequency", "startDate", "endDate", "status", "patientId", "medicationId") VALUES ('062e2fd9-303e-447f-850c-026a8720db79', '1000mg', 'Every 8 hours', '2025-07-30T03:00:34.829Z', '2025-07-23T19:54:15.408Z', 'Completed', '49b8df60-68cd-4535-b3bd-e9ae57b939ff', 'fa427049-96c9-4712-b111-ea5e1e97e18b');
INSERT INTO "Prescription" ("id", "dosage", "frequency", "startDate", "endDate", "status", "patientId", "medicationId") VALUES ('25648118-a158-46f8-8d82-6bdb0cf82de4', '500mg', 'Once daily', '2026-01-02T10:11:04.080Z', '2026-01-04T09:13:34.967Z', 'Discontinued', '6d22299e-bc0e-46fb-9515-d280215c537a', '5d8b1fb4-6835-40cc-ab64-55b0dabe4414');
INSERT INTO "Prescription" ("id", "dosage", "frequency", "startDate", "endDate", "status", "patientId", "medicationId") VALUES ('4a601dd8-2477-489f-9dca-1abee01de540', '500mg', 'Every 6 hours', '2025-12-07T03:48:25.021Z', '2025-04-26T13:39:48.128Z', 'Pending', 'e0ed00fb-b8ba-4756-8351-36c178176398', '0f909d18-c129-4a13-aed5-f27a08c4f56e');
INSERT INTO "Prescription" ("id", "dosage", "frequency", "startDate", "endDate", "status", "patientId", "medicationId") VALUES ('76e923bc-0c11-4894-983b-553430462db7', '10mg', 'Every 8 hours', '2025-10-05T22:16:11.405Z', '2024-12-16T23:18:19.308Z', 'Active', '49b8df60-68cd-4535-b3bd-e9ae57b939ff', '8885e482-8d4e-4d02-b577-6a271b06c621');
INSERT INTO "Prescription" ("id", "dosage", "frequency", "startDate", "endDate", "status", "patientId", "medicationId") VALUES ('0f7c42eb-f98e-4e72-8451-59ba84182e89', '10mg', 'Once daily', '2025-07-16T20:24:17.194Z', '2026-01-01T14:48:26.225Z', 'Pending', 'e0ed00fb-b8ba-4756-8351-36c178176398', '6fee1333-20ed-4ad2-bff5-1cf47bc13567');
INSERT INTO "Prescription" ("id", "dosage", "frequency", "startDate", "endDate", "status", "patientId", "medicationId") VALUES ('20999048-0d09-44fa-9d18-14c7f768ca59', '1000mg', 'Twice daily', '2025-02-06T11:34:48.269Z', '2026-02-04T00:21:52.831Z', 'Pending', 'e9c582b8-3ea1-4228-beed-7ce215c92b20', '9bed6b5a-40a7-4858-938c-08389b76b6f6');
INSERT INTO "Prescription" ("id", "dosage", "frequency", "startDate", "endDate", "status", "patientId", "medicationId") VALUES ('bc4c1061-1f63-492f-bb5e-373d1f99da04', '1000mg', 'Twice daily', '2025-06-18T13:06:57.245Z', '2024-11-21T16:05:14.284Z', 'Completed', 'd42a85c2-47e5-4726-9d82-61117fd72025', '8885e482-8d4e-4d02-b577-6a271b06c621');
INSERT INTO "Prescription" ("id", "dosage", "frequency", "startDate", "endDate", "status", "patientId", "medicationId") VALUES ('3703a9a6-9aea-4993-901d-c62e1705477d', '250mg', 'Once a week', '2025-10-08T19:21:39.324Z', '2025-02-16T12:24:07.632Z', 'Discontinued', '5b65bd89-1cc3-4c3a-90d1-2733de04c7af', 'd6ad3984-8b18-4123-8052-2bab811ee88f');

INSERT INTO "MedicationOrder" ("id", "quantity", "status", "medicationId", "organizationId") VALUES ('7668a4de-8227-4d3f-98db-6c0c7aec425d', 93, 'Pending', '98cf07be-b3e8-42b6-8a94-e4d0373aa69a', '60a3d67c-2e57-429d-836f-6cec62a4a7af');
INSERT INTO "MedicationOrder" ("id", "quantity", "status", "medicationId", "organizationId") VALUES ('f3c1db78-64cf-4e0a-8ba3-9e9c61c9a982', 821, 'In Progress', '9bed6b5a-40a7-4858-938c-08389b76b6f6', '60a3d67c-2e57-429d-836f-6cec62a4a7af');
INSERT INTO "MedicationOrder" ("id", "quantity", "status", "medicationId", "organizationId") VALUES ('fc76eb44-1237-4f55-a9be-38ac35dbfca1', 861, 'On Hold', '8885e482-8d4e-4d02-b577-6a271b06c621', 'f0ed4da2-8ad6-4e2c-84a1-95c9740f2e48');
INSERT INTO "MedicationOrder" ("id", "quantity", "status", "medicationId", "organizationId") VALUES ('82e5a71b-aa22-4c60-b56e-7416ad6b5b20', 778, 'In Progress', '6fee1333-20ed-4ad2-bff5-1cf47bc13567', '4bd04aa7-61b2-4c6e-915b-c2f54e07144f');
INSERT INTO "MedicationOrder" ("id", "quantity", "status", "medicationId", "organizationId") VALUES ('5db2bcdc-eb2c-4d76-af25-b9366e408892', 200, 'Pending', '4c17225c-b78c-49a8-a9bd-c292ce7d0dd7', '661c7954-76c3-452a-b0c4-5fc8b63fa145');
INSERT INTO "MedicationOrder" ("id", "quantity", "status", "medicationId", "organizationId") VALUES ('9c8ed6b8-4e4e-48a1-9728-dfb1bacd52ae', 660, 'Completed', 'fa427049-96c9-4712-b111-ea5e1e97e18b', '60a3d67c-2e57-429d-836f-6cec62a4a7af');
INSERT INTO "MedicationOrder" ("id", "quantity", "status", "medicationId", "organizationId") VALUES ('80e3b961-961a-49b0-a964-026ea0c7a3fe', 392, 'Cancelled', '6fee1333-20ed-4ad2-bff5-1cf47bc13567', '236dd106-a725-46ad-8167-c93795b1e60d');
INSERT INTO "MedicationOrder" ("id", "quantity", "status", "medicationId", "organizationId") VALUES ('737e1cdb-63bc-409d-bf00-2fd5cca84863', 796, 'In Progress', '6fee1333-20ed-4ad2-bff5-1cf47bc13567', '60a3d67c-2e57-429d-836f-6cec62a4a7af');
INSERT INTO "MedicationOrder" ("id", "quantity", "status", "medicationId", "organizationId") VALUES ('8fca7579-10ab-4dbd-88e6-85d2a9917d70', 973, 'Cancelled', '98cf07be-b3e8-42b6-8a94-e4d0373aa69a', '4bd04aa7-61b2-4c6e-915b-c2f54e07144f');
INSERT INTO "MedicationOrder" ("id", "quantity", "status", "medicationId", "organizationId") VALUES ('1299f017-8513-4647-8fbe-56070ce068cf', 168, 'In Progress', '8885e482-8d4e-4d02-b577-6a271b06c621', '661c7954-76c3-452a-b0c4-5fc8b63fa145');

INSERT INTO "HealthLog" ("id", "type", "notes", "date", "patientId", "userId") VALUES ('a1a3f452-e26d-48ff-bbe3-f265b0f3f14d', 'Blood Pressure Check', 'Missed one dose of medication.', '2025-02-01T03:00:00.717Z', 'dc574907-b959-4a5c-84e3-ef16b43cc10a', '3ec65c18-7bfe-4280-9e0f-07ee939beca5');
INSERT INTO "HealthLog" ("id", "type", "notes", "date", "patientId", "userId") VALUES ('c34c1181-0b8c-4b12-b83f-0c8e2065fa4c', 'Dietary Intake', 'Completed 30 minutes of cardio.', '2025-04-12T17:40:34.499Z', 'eb8d7759-c86a-44f0-8907-b7c27339d1f3', '8c8d3ea2-3528-4f45-8305-794e9b903a42');
INSERT INTO "HealthLog" ("id", "type", "notes", "date", "patientId", "userId") VALUES ('b335c900-8d10-43ba-9b76-49af700cabe1', 'Medication Adherence', 'High intake of carbohydrates today.', '2024-06-20T05:06:10.335Z', 'dc574907-b959-4a5c-84e3-ef16b43cc10a', '0d683e0b-ac84-41ce-bce4-624a0f00ccb9');
INSERT INTO "HealthLog" ("id", "type", "notes", "date", "patientId", "userId") VALUES ('1889bccd-a5dc-43cb-8ac1-4bc258ba4f72', 'Medication Adherence', 'Patient reports improved sleep duration.', '2025-12-10T16:20:01.882Z', '49b8df60-68cd-4535-b3bd-e9ae57b939ff', 'a7d61c49-7b1a-4fdf-b3c0-55dde8b5232d');
INSERT INTO "HealthLog" ("id", "type", "notes", "date", "patientId", "userId") VALUES ('34a9f993-e980-4964-9d62-3ccb2066771e', 'Daily Exercise Log', 'Completed 30 minutes of cardio.', '2025-10-30T11:03:04.018Z', '5b65bd89-1cc3-4c3a-90d1-2733de04c7af', 'a7d61c49-7b1a-4fdf-b3c0-55dde8b5232d');
INSERT INTO "HealthLog" ("id", "type", "notes", "date", "patientId", "userId") VALUES ('1cbf2f3b-db9f-4674-87c5-9e784e788e2e', 'Blood Pressure Check', 'Patient reports improved sleep duration.', '2025-10-22T08:23:27.130Z', '49b8df60-68cd-4535-b3bd-e9ae57b939ff', '27530eee-5667-440c-82ef-2defc3ffec19');
INSERT INTO "HealthLog" ("id", "type", "notes", "date", "patientId", "userId") VALUES ('05a18460-4539-468c-ae82-fbc689e39591', 'Blood Pressure Check', 'Completed 30 minutes of cardio.', '2025-12-05T16:10:48.198Z', 'dc574907-b959-4a5c-84e3-ef16b43cc10a', '0d683e0b-ac84-41ce-bce4-624a0f00ccb9');
INSERT INTO "HealthLog" ("id", "type", "notes", "date", "patientId", "userId") VALUES ('cca66bc4-74b4-4690-ae37-54aeb0b7dd6e', 'Blood Pressure Check', 'Patient reports improved sleep duration.', '2024-04-17T05:05:19.085Z', '6d22299e-bc0e-46fb-9515-d280215c537a', 'b6036bc1-cf54-4c49-8ad8-9dadc0880156');
INSERT INTO "HealthLog" ("id", "type", "notes", "date", "patientId", "userId") VALUES ('18c19e6d-85a9-40e1-be8e-d7038e3f7290', 'Dietary Intake', 'High intake of carbohydrates today.', '2024-08-19T19:23:12.005Z', '6d22299e-bc0e-46fb-9515-d280215c537a', '3ec65c18-7bfe-4280-9e0f-07ee939beca5');
INSERT INTO "HealthLog" ("id", "type", "notes", "date", "patientId", "userId") VALUES ('d80d37b4-25ec-4b43-8d8e-97dfd15698ab', 'Daily Exercise Log', 'Completed 30 minutes of cardio.', '2024-03-23T08:02:26.703Z', 'dc574907-b959-4a5c-84e3-ef16b43cc10a', '8c8d3ea2-3528-4f45-8305-794e9b903a42');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
