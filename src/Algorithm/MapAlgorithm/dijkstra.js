import { useContext } from "react";
import { MapContext } from "../../Component/Map/Leaflet";

import { getWays,getCoordinate } from "./queryFunctions";

export const dijkstra =  (mapCtx) => {
   const sourceId = 5233397151;
   const destinationId = 8386270556;

   let visited=new Array();
   let distance =new Array(); 
   let parent =new Array();

   

   const findMinVertex=(distance)=>{
      let minVertex,minDist=Number.MAX_SAFE_INTEGER;

      for (const key in distance) {
         if(visited[key]!=true){
            const value = distance[key];
            if(value<minDist){
               minDist=value;
               minVertex=key;
            }
         }
      }
   
      return minVertex;
   }
   
   async function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
   }


   async function executeDijkstra() {
      // const sourceId = getNodeId(mapCtx.source);
      
      distance[sourceId]=0;
      distance[destinationId]=10000;
      
      let i=0;
      while(i<4){
         let u= findMinVertex(distance);
         if(parseInt(u)==destinationId) return;

         let cord=await getCoordinate(u);
         if(parent[u]){
            let parentCord=await getCoordinate(parent[u]);
            mapCtx.setLineArray([cord,parentCord]);
         }

         visited[u]=true;
         const y = await getWays(u);

         for(let i=0;i<y.length;i++){
            let index=y[i].nodes.indexOf(parseInt(u));
            let adjNode;
            
            if(index>0){
               adjNode=y[i].nodes[index-1];
               distance[adjNode]=5;
               parent[adjNode]=u;
               
            }
            if(index<y[i].nodes.length-1){
               adjNode=y[i].nodes[index+1];
               distance[adjNode]=5+i;
               parent[adjNode]=u;
            }
         }
         
         i++;

      }
     
   }
   executeDijkstra();
};