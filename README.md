# Mountstribe-Api-Assignment:
### Api with node js and express with MySql database

# Getting started:
### To install requier node packages 
> npm i
### To run the server locally 
> npm start

# Resource Used:
> * Express - `to manage servers and routes`
> * MySql -  `to accesss mysql function in node js`
> * Nodemon -  `Auto refresh server after code update`
> * express-rate-limit -  `Limit the rate of unwanted traffic and DOS attack`
> * express-validator -  `Validate Input data`
> * StackOverFlow - 

## Api Links:
#### Register a new Patient
```http
> localhost:8080/api/register
``` [link](http://localhost:8080/api/register)


| Body Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `patient_name` | `string` | **Required**.|
| `patient_address` | `string` | **Required**.|
| `patient_email` | `string` | **Required**.|
| `patient_phone_no` | `int` | **Required**.|
| `patient_password` | `string` | **Required**.|
| `patient_photo` | `string` | **Required**.|
| `psychiatrist_id` | `int` | **Required**.|

```http
> localhost:8080/api/customQuery/{hospital_id}``` [link](http://localhost:8080/api/customQuery/2) `Fetch all the psychiatrists, their count along with IDs and patient details for a hospital`


| Return | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `hospital_name` | `string` | **Name of the Hospital**.|
| `total_psychiatrist` | `int` | **Total no of psychiatrist in hospital**.|
| `total_patients` | `int` | **Total no of patients in the hospital**.|
| `psychiatrist_id` | `int` | **Psychiatrist Id**.|
| `psychiatrist_name` | `string` | **Psychiatrist Name**.|
| `psychiarist patients ` | `int` | **Total paitient of psychiatrist**.|

#### References
> [List-of-standard-lengths-for-database-fields](https://stackoverflow.com/questions/20958/list-of-standard-lengths-for-database-fields)

> [Discussion on email length](https://stackoverflow.com/questions/1297272/how-long-should-sql-email-fields-be)