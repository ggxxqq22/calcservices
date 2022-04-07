import Vue from "vue";
import VueRouter from 'vue-router';
import Kmeans from '@/components/Kmeans.vue'
import DecisionTree from '@/components/DecisionTree.vue'
import RandomForest from '@/components/RandomForest.vue'
import SVM from '@/components/SVM.vue'
import SVR from '@/components/SVR.vue'
import LinearRegression from '@/components/LinearRegression.vue'
import LogisticRegression from '@/components/LogisticRegression.vue'
import PCA from '@/components/pca.vue'
import TSNE from '@/components/TSNE.vue'
import PolyData from '@/components/PloyData.vue'
import WordCloud from '@/components/WordCloud.vue'
import PDF2Word from '@/components/PDF2Word.vue'
import Ttest from '@/components/Ttest.vue'
import HomePage from '@/components/HomePage.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/homepage'},
    { path: '/kmeans', component: Kmeans },
    { path: '/decisionTree', component: DecisionTree },
    { path: '/randomForest', component: RandomForest },
    { path: '/svm', component: SVM },
    { path: '/svr', component: SVR },
    { path: '/linearRegression', component: LinearRegression },
    { path: '/logisticRegression', component: LogisticRegression },
    { path: '/pca', component: PCA },
    { path: '/TSNE', component: TSNE },
    { path: '/Ttest', component: Ttest },
    { path: '/ploydata', component: PolyData },
    { path: '/wordCloud', component: WordCloud },
    { path: '/pdf2word', component: PDF2Word },
    { path: '/homepage', component: HomePage},
  ]
})

export default router