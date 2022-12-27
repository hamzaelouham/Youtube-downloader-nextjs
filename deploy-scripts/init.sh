
#!/bin/bash

# Declare a variable
echo 'runnig script ...'

projectName='k8s-docker-nextjs' 
zone='us-west4 '

# gcloud auth login

# gcloud projects list

# gcloud config set project $projectName

# gcloud container get-server-config --zone europe-west3-c

# full list of options
# gcloud container clusters create --help

# master node k8s version 1.25.4-gke.2100

# gcloud container clusters create k8s-docker-nextjs \
# --cluster-version  1.25.4-gke.2100 \
# --disk-size 250 \
# --num-nodes 1 \
# --machine-type e2-small \
# --zone europe-west3-c
# --no-enable-cloud-endpoints \
# --no-enable-cloud-logging \
# --no-enable-cloud-monitoring  \
gcloud container clusters create k8s-docker-nextjs \
--cluster-version  1.25.4-gke.2100 \
--disk-size 50 \
--num-nodes 1 \
--machine-type e2-small \
--zone us-west4 


# connect to the cluster 

# gcloud container clusters get-credentials k8s-docker-nextjs --region us-west4 --project k8s-docker-nextjs