
#!/bin/bash

# Declare a variable
echo 'runnig script ...'

zone='europe-west3-c'
projectName='k8s-docker-nextjs' 

gcloud container clusters delete $projectName --zone $zone 

# gcloud container clusters get-credentials k8s-docker-nextjs --zone europe-west3-c --project k8s-docker-nextjs