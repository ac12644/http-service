# http-service

## **Create a repository**

1. export PROJECT\_ID= **PROJECT\_ID**
2. gcloud config set project $PROJECT\_ID
3. gcloud artifacts repositories create http-repo \

--repository-format=docker \

--location= **us-west1** \
 --description=&quot;Docker repository&quot;

## **Building the container image**

1. git clone https://github.com/ac12644/http-service.git
2. cd kubernetes-engine-samples/http-service
3. docker build -t **us-west1** -docker.pkg.dev/${PROJECT\_ID}/http-repo/http-service:v1 .
4. docker images

## **Pushing the Docker image to Artifact Registry**

1. gcloud auth configure-docker **us-west1** -docker.pkg.dev
2. docker push **us-west1** -docker.pkg.dev/${PROJECT\_ID}/http-repo/http-service:v1

## **Creating a GKE cluster**

1. gcloud container clusters create-auto http-cluster
2. kubectl get nodes

## **Deploying the**  **http-service**  **to GKE**

1. gcloud container clusters get-credentials http-cluster --zone **us-west1-a**
2. kubectl create deployment http-service --image= **us-west1** -docker.pkg.dev/${PROJECT\_ID}/hello-repo/hello-app:v1
3. kubectl scale deployment hello-app --replicas=3
4. kubectl autoscale deployment hello-app --cpu-percent=80 --min=1 --max=5
5. kubectl get pods ![](RackMultipart20211111-4-1tjzvei_html_45b97004abf9e719.png)

## **Exposing**  **http-service**  to the internet

1. kubectl expose deployment http-service --name=http-service --type=LoadBalancer --port 80 --target-port 8080
2. kubectl get service ![](RackMultipart20211111-4-1tjzvei_html_aca44782538f6779.png)

IP\_ADRESS: [http://35.230.13.227/](http://35.230.13.227/)
