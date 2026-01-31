import type { LearnLanguage } from "@/data/mockData";

export const topicsOfKubernetes = [
  "Learning Objectives",

  "Container Orchestration",

  "Kubernetes Introduction",
  
  "Minikube Setup",

  "Kubernetes Architecture",
  "etcd",
  "API Server",
  "Scheduler",
  "Controller Manager",
  "Cloud Controller Manager",
  "Kubelet",
  "Kube Proxy (Component)",
  "Container Runtime",

  "Kubernetes Object Model",
  "Node",
  "Namespace",
  "Pod",
  "Label",
  "Label Selector",

  "ReplicationController",
  "ReplicaSet",
  "Deployment",
  "DaemonSet",

  "Service",
  "kube-proxy",
  "Service Discovery",
  "Service Type: ClusterIP",
  "Service Type: NodePort",
  "Service Type: LoadBalancer",
  "Service Type: ExternalName",
  "Service externalIPs",
  "Multi-Port Service",
  "Port Forwarding",
  "Traffic Policy",

  "Authentication",
  "Authorization",
  "RBAC",
  "Admission Control",

  "Volume",
  "CSI",
  "Volume Types",
  "PersistentVolume",
  "PersistentVolumeClaim",
  "hostPath Volume",

  "ConfigMap",
  "Secret",

  "Ingress",
  "Ingress Controller",

  "Annotation",
  "Resource Quota",
  "LimitRange",
  "Autoscaling",
  "Job",
  "CronJob",
  "StatefulSet",
  "Custom Resource",

  "Security Context",
  "Pod Security Admission",
  "Network Policy"
];

export const topicContentsOfKubernetes: {
  [key: string]: { title: string; content: string; code?: string };
} = {
  
"Learning Objectives": {
  title: "Learning Objectives",
  content: `This learning path is designed to help you understand Kubernetes as a system, not just as a set of commands.

The objective is to build strong fundamentals so that Kubernetes concepts feel connected instead of isolated. You should be able to understand why a feature exists, not just how to use it.

By the end of this journey, you should confidently reason about application deployment, scaling, networking, and security inside a Kubernetes cluster. You should also be able to read Kubernetes YAML files and understand what problem they are solving.

This is not about rushing through topics. It is about building intuition step by step so that Kubernetes feels predictable and logical.`,
  code: `
int learning_Should_be = 100;
int understanding_should_be = 100;
`
},


"Container Orchestration": {
  title: "Container Orchestration",
  content: `Running one container is simple. Running hundreds or thousands reliably is not.

As applications grew and traffic increased, teams needed a way to manage containers automatically. Containers crash, machines go down, traffic spikes unexpectedly, and manual intervention does not scale.

Container orchestration is the system that takes responsibility for these problems. It ensures containers are running, restarts them when they fail, places them on healthy machines, and keeps the application state aligned with what engineers declare.

Instead of managing containers directly, engineers describe what they want. The orchestrator continuously works in the background to make that desired state a reality. Kubernetes is the most popular container orchestrator because it does this reliably at scale.`,
  code: `
int desired_Containers = 10;
int running_Containers = 10;
`
},
  "Kubernetes Introduction": {
  title: "Kubernetes Introduction",
  content: `Kubernetes is not a tool you use directly. It is a system that makes decisions for you.

At its core, Kubernetes is a distributed control system that manages applications running as containers. Instead of asking you to manually start, stop, and monitor containers, Kubernetes takes responsibility for maintaining the desired state of your application.

The key idea behind Kubernetes is declaration. You do not tell Kubernetes how to do things step by step. You tell it what you want, such as how many instances should run, how they should be exposed, and what resources they need. Kubernetes continuously compares the current state of the cluster with the desired state and takes action when they differ.

Kubernetes was designed for failure. Nodes can crash, containers can exit, networks can break, and traffic can spike without warning. Rather than treating failures as exceptions, Kubernetes assumes failures are normal and builds recovery directly into the system.

Another important aspect of Kubernetes is separation of concerns. Developers focus on application behavior. Kubernetes focuses on scheduling, scaling, networking, and self-healing. This separation allows teams to move faster without tightly coupling application logic to infrastructure logic.

Kubernetes also provides a consistent platform. Whether applications run on a laptop, a data center, or a cloud provider, the Kubernetes model remains the same. This consistency is one of the main reasons Kubernetes became the standard platform for running containerized workloads at scale.

Understanding Kubernetes means understanding that it is not just about containers. It is about control loops, reconciliation, and automation. Once this mental model is clear, every Kubernetes concept starts to fit naturally into place.`
},
 
  "Minikube Setup": {
    title: "Minikube Setup",
    content: `Go through the provided instruction to install minikube and setup kubernetes cluster in your MAC OS
    for Linux and Windows we will provide installatio procedure soon.
    https://www.youtube.com/watch?v=AjJ96_w4Gw8`
  },
  "Kubernetes Architecture": {
    title: "Kubernetes Architecture",
    content: `Placeholder content for Kubernetes Architecture. This section will be expanded later.`
  },
  "etcd": {
    title: "etcd",
    content: `Placeholder content for etcd. This section will be expanded later.`
  },
  "API Server": {
    title: "API Server",
    content: `Placeholder content for API Server. This section will be expanded later.`
  },
  "Scheduler": {
    title: "Scheduler",
    content: `Placeholder content for Scheduler. This section will be expanded later.`
  },
  "Controller Manager": {
    title: "Controller Manager",
    content: `Placeholder content for Controller Manager. This section will be expanded later.`
  },
  "Cloud Controller Manager": {
    title: "Cloud Controller Manager",
    content: `Placeholder content for Cloud Controller Manager. This section will be expanded later.`
  },
  "Kubelet": {
    title: "Kubelet",
    content: `Placeholder content for Kubelet. This section will be expanded later.`
  },
  "Kube Proxy (Component)": {
    title: "Kube Proxy (Component)",
    content: `Placeholder content for Kube Proxy (Component). This section will be expanded later.`
  },
  "Container Runtime": {
    title: "Container Runtime",
    content: `Placeholder content for Container Runtime. This section will be expanded later.`
  },
  "Kubernetes Object Model": {
    title: "Kubernetes Object Model",
    content: `Placeholder content for Kubernetes Object Model. This section will be expanded later.`
  },
  "Node": {
    title: "Node",
    content: `Placeholder content for Node. This section will be expanded later.`
  },
  "Namespace": {
    title: "Namespace",
    content: `Placeholder content for Namespace. This section will be expanded later.`
  },
  "Pod": {
    title: "Pod",
    content: `Placeholder content for Pod. This section will be expanded later.`
  },
  "Label": {
    title: "Label",
    content: `Placeholder content for Label. This section will be expanded later.`
  },
  "Label Selector": {
    title: "Label Selector",
    content: `Placeholder content for Label Selector. This section will be expanded later.`
  },
  "ReplicationController": {
    title: "ReplicationController",
    content: `Placeholder content for ReplicationController. This section will be expanded later.`
  },
  "ReplicaSet": {
    title: "ReplicaSet",
    content: `Placeholder content for ReplicaSet. This section will be expanded later.`
  },
  "Deployment": {
    title: "Deployment",
    content: `Placeholder content for Deployment. This section will be expanded later.`
  },
  "DaemonSet": {
    title: "DaemonSet",
    content: `Placeholder content for DaemonSet. This section will be expanded later.`
  },
  "Service": {
    title: "Service",
    content: `Placeholder content for Service. This section will be expanded later.`
  },
  "kube-proxy": {
    title: "kube-proxy",
    content: `Placeholder content for kube-proxy. This section will be expanded later.`
  },
  "Service Discovery": {
    title: "Service Discovery",
    content: `Placeholder content for Service Discovery. This section will be expanded later.`
  },
  "Service Type: ClusterIP": {
    title: "Service Type: ClusterIP",
    content: `Placeholder content for Service Type: ClusterIP. This section will be expanded later.`
  },
  "Service Type: NodePort": {
    title: "Service Type: NodePort",
    content: `Placeholder content for Service Type: NodePort. This section will be expanded later.`
  },
  "Service Type: LoadBalancer": {
    title: "Service Type: LoadBalancer",
    content: `Placeholder content for Service Type: LoadBalancer. This section will be expanded later.`
  },
  "Service Type: ExternalName": {
    title: "Service Type: ExternalName",
    content: `Placeholder content for Service Type: ExternalName. This section will be expanded later.`
  },
  "Service externalIPs": {
    title: "Service externalIPs",
    content: `Placeholder content for Service externalIPs. This section will be expanded later.`
  },
  "Multi-Port Service": {
    title: "Multi-Port Service",
    content: `Placeholder content for Multi-Port Service. This section will be expanded later.`
  },
  "Port Forwarding": {
    title: "Port Forwarding",
    content: `Placeholder content for Port Forwarding. This section will be expanded later.`
  },
  "Traffic Policy": {
    title: "Traffic Policy",
    content: `Placeholder content for Traffic Policy. This section will be expanded later.`
  },
  "Authentication": {
    title: "Authentication",
    content: `Placeholder content for Authentication. This section will be expanded later.`
  },
  "Authorization": {
    title: "Authorization",
    content: `Placeholder content for Authorization. This section will be expanded later.`
  },
  "RBAC": {
    title: "RBAC",
    content: `Placeholder content for RBAC. This section will be expanded later.`
  },
  "Admission Control": {
    title: "Admission Control",
    content: `Placeholder content for Admission Control. This section will be expanded later.`
  },
  "Volume": {
    title: "Volume",
    content: `Placeholder content for Volume. This section will be expanded later.`
  },
  "CSI": {
    title: "CSI",
    content: `Placeholder content for CSI. This section will be expanded later.`
  },
  "Volume Types": {
    title: "Volume Types",
    content: `Placeholder content for Volume Types. This section will be expanded later.`
  },
  "PersistentVolume": {
    title: "PersistentVolume",
    content: `Placeholder content for PersistentVolume. This section will be expanded later.`
  },
  "PersistentVolumeClaim": {
    title: "PersistentVolumeClaim",
    content: `Placeholder content for PersistentVolumeClaim. This section will be expanded later.`
  },
  "hostPath Volume": {
    title: "hostPath Volume",
    content: `Placeholder content for hostPath Volume. This section will be expanded later.`
  },
  "ConfigMap": {
    title: "ConfigMap",
    content: `Placeholder content for ConfigMap. This section will be expanded later.`
  },
  "Secret": {
    title: "Secret",
    content: `Placeholder content for Secret. This section will be expanded later.`
  },
  "Ingress": {
    title: "Ingress",
    content: `Placeholder content for Ingress. This section will be expanded later.`
  },
  "Ingress Controller": {
    title: "Ingress Controller",
    content: `Placeholder content for Ingress Controller. This section will be expanded later.`
  },
  "Annotation": {
    title: "Annotation",
    content: `Placeholder content for Annotation. This section will be expanded later.`
  },
  "Resource Quota": {
    title: "Resource Quota",
    content: `Placeholder content for Resource Quota. This section will be expanded later.`
  },
  "LimitRange": {
    title: "LimitRange",
    content: `Placeholder content for LimitRange. This section will be expanded later.`
  },
  "Autoscaling": {
    title: "Autoscaling",
    content: `Placeholder content for Autoscaling. This section will be expanded later.`
  },
  "Job": {
    title: "Job",
    content: `Placeholder content for Job. This section will be expanded later.`
  },
  "CronJob": {
    title: "CronJob",
    content: `Placeholder content for CronJob. This section will be expanded later.`
  },
  "StatefulSet": {
    title: "StatefulSet",
    content: `Placeholder content for StatefulSet. This section will be expanded later.`
  },
  "Custom Resource": {
    title: "Custom Resource",
    content: `Placeholder content for Custom Resource. This section will be expanded later.`
  },
  "Security Context": {
    title: "Security Context",
    content: `Placeholder content for Security Context. This section will be expanded later.`
  },
  "Pod Security Admission": {
    title: "Pod Security Admission",
    content: `Placeholder content for Pod Security Admission. This section will be expanded later.`
  },
  "Network Policy": {
    title: "Network Policy",
    content: `Placeholder content for Network Policy. This section will be expanded later.`
  }
};

export const getKubernetesLanguageContent = (): LearnLanguage => {
  return {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "Server",
    topics: topicsOfKubernetes.map((topic) => ({
      id: `kubernetes-${topic.toLowerCase().replace(/\s+/g, "-")}`,
      title: topic,
      content: topicContentsOfKubernetes[topic]?.content || "",
      code: topicContentsOfKubernetes[topic]?.code,
    })),
  };
};