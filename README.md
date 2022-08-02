# Virtual-Derma-Scan-Webapp
Bachelor Thesis Webapp Application for the diagnosis of dermatological diseases

Check video: https://drive.google.com/drive/folders/1l-NmsWCxBL7mdYDvK0wrj6QjlJylWFH-?usp=sharing

The software system is designed on a 3-Tier architecture, as can be seen in the system diagram:

1. Presentation Tier: represented by Angular application, through which the user interacts with the sistem;

2. Business Logic Tier: represented by Server Java Spring Application, which serves the Client application through REST services; Flask Server Application used to perform image prediction based on the model; Prediction Model Notebook used to train the Convolutional Neural Network and generate a model used for predictions.

3. Data Tier: represented by PostgreSQL, which ensure data persistence through storage.

![conceptual-architecture drawio](https://user-images.githubusercontent.com/64549436/182331287-7e416a98-81b9-4fd2-a004-32bd66bf2620.png)

Application Use Cases:

![Use-case-diagram](https://user-images.githubusercontent.com/64549436/182334996-5356ca9c-942c-40a7-83d0-c5d37e8d1a1d.png)
