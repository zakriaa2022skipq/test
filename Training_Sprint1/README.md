
# Hello world lambda

Lambda is an event based AWS compute service. It is serverless i.e user is not managing the servers. In this sprint the goal is to define a lambda function with the help of aws cdk and deploy it.

## AWS CDK
AWS cloud development kit helps in defining infrastructure by code. The app is initialized with the below command.
```
cdk init app --language javascript
```   
After defining the lambda function in the stack file by using the constructs provided by aws the app can be synthesised by the command below.
```
cdk synth
```
After the successful completion of synthesis a json configuration file is generated that is used to define the infrastructure. The deployment is done with the below command. For deployment to work successfully aws cli must be configured with user credentials.
```
cdk deploy
```  

