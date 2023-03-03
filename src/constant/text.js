export const dataList = [
  {
    name: 'kmeans',
    arg: {
      isRequired: true,
      text: '请输入聚类数量K'
    },
    requireText: '请上传一个文件，只支持上传csv文件',
    title: '聚类：K-means聚类',
    detail: '将物理或抽象对象的集合分成由类似的对象组成的多个类的过程被称为聚类。Kmeans聚类算法又称k均值聚类算法，其是一种迭代求解的聚类分析算法。',
    dataNum: 1,
    type: '机器学习方法',
    text: '只允许上传一个 csv 文件, 返回聚类后的csv文件，上传文件如下图所示：',
    srcs: [require('../assets/tip/kmeans.png')]
  },
  {
    name: 'decisionTree',
    arg: {
      isRequired: false
    },
    requireText: '请同时上传训练集和测试集，并分别命名为train.csv,test.csv',
    title: '决策树：决策树处理分类问题',
    detail: '决策树是在已知各种情况发生概率的基础上，通过构成决策树来求取净现值的期望值大于等于零的概率，评价项目风险，判断其可行性的决策分析方法，是直观运用概率分析的一种图解法。',
    dataNum: 2,
    type: '机器学习方法',
    text: '需同时上传两个 csv 文件，先上传训练集后上传测试集，测试集无target列，返回测试集的预测结果，上传文件如下图所示：',
    srcs: [require('../assets/tip/tree1.png'), require('../assets/tip/tree2.png')]
  },
  {
    name: 'randomForest',
    arg: {
      isRequired: false
    },
    requireText: '请同时上传训练集和测试集，并分别命名为train.csv,test.csv',
    title: '随机森林：随机森林算法处理分类问题',
    detail: '随机森林算法是最常用也是最强大的监督学习算法之一，其通过集成学习的思想，将多棵决策树进行集成，输出的类别所有树输出的众数。',
    dataNum: 2,
    type: '机器学习方法',
    text: '需同时上传两个 csv 文件，先上传训练集后上传测试集，测试集无target列，返回测试集的预测结果，上传文件如下图所示：',
    srcs: [require('../assets/tip/tree1.png'), require('../assets/tip/tree2.png')]
  },
  {
    name: 'svm',
    arg: {
      isRequired: false
    },
    requireText: '请同时上传训练集和测试集，并分别命名为train.csv,test.csv',
    title: 'SVM：支持向量机算法处理分类问题',
    detail: '支持向量机是一种二分类模型，它的基本模型是定义在特征空间上的间隔最大的线性分类器。',
    dataNum: 2,
    type: '机器学习方法',
    text: '需同时上传两个 csv 文件，先上传训练集后上传测试集，测试集无target列，返回测试集的预测结果，上传文件如下图所示：',
    srcs: [require('../assets/tip/svm1.png'), require('../assets/tip/svm2.png')]
  },
  {
    name: 'svr',
    arg: {
      isRequired: false
    },
    requireText: '请同时上传训练集和测试集，并分别命名为train.csv,test.csv',
    title: 'SVR：支持向量回归机算法处理回归问题',
    detail: '支持向量回归机是支持向量机中的一个重要的应用分支。SVR回归与SVM分类的区别在于，SVR的样本点最终只有一类，它所寻求的最优超平面不是SVM那样使两类或多类样本点分的“最开”，而是使所有的样本点离着超平面的总偏差最小。',
    dataNum: 2,
    type: '机器学习方法',
    text: '需同时上传两个 csv 文件，先上传训练集后上传测试集，测试集无target列，返回测试集的预测结果，上传文件如下图所示：',
    srcs: [require('../assets/tip/svr1.png'), require('../assets/tip/svr2.png')]
  },
  {
    name: 'linearRegression',
    arg: {
      isRequired: false
    },
    requireText: '请同时上传训练集和测试集，并分别命名为train.csv,test.csv',
    title: '多元线性回归：多元线性回归处理回归问题',
    detail: '多元线性回归即是利用数理统计中回归分析，来确定两种或两种以上变量间相互依赖的定量关系的一种统计分析方法。',
    dataNum: 2,
    type: '机器学习方法',
    text: '需同时上传两个 csv 文件，先上传训练集后上传测试集，测试集无target列，返回测试集的预测结果，上传文件如下图所示：',
    srcs: [require('../assets/tip/svr1.png'), require('../assets/tip/svr2.png')]
  },
  {
    name: 'logisticRegression',
    arg: {
      isRequired: false
    },
    requireText: '请同时上传训练集和测试集，并分别命名为train.csv,test.csv',
    title: '逻辑回归：逻辑回归处理分类问题',
    detail: '逻辑回归虽然被称为回归，但其实际上是分类模型，并常用于二分类。逻辑回归的本质是：假设数据服从这个分布，然后使用极大似然估计做参数的估计。',
    dataNum: 2,
    type: '机器学习方法',
    text: '需同时上传两个 csv 文件，先上传训练集后上传测试集，测试集无target列，返回测试集的预测结果，上传文件如下图所示：',
    srcs: [require('../assets/tip/svm1.png'), require('../assets/tip/svm2.png')]
  },
  {
    name: 'pca',
    arg: {
      isRequired: true,
      text: '请输入降低维度N'
    },
    requireText: '请上传一个文件，只支持上传csv文件',
    title: 'PCA：主成分分析降维法',
    detail: '主成分分析（Principal Component Analysis，PCA）是一种多变量统计方法，他是最常用的降维方法之一，通过正交变换将一组可能存在相关性的变量数据转换为一组线性不相关的变量，转换后的变量被称为主成分',
    dataNum: 1,
    type: '数据分析工具',
    text: '需填写降低后的维度N然后上传1个 csv 文件，维度可选大于1的整数，表示降低到N维，也可选（0，1）的小数，表示保留成分对信息的最小贡献，算法会选择合适的维度，返回降维后的文件，上传文件如下图所示：',
    srcs: [require('../assets/tip/pca.png')]
  },
  {
    name: 'TSNE',
    arg: {
      isRequired: true,
      text: '请输入降低维度N'
    },
    requireText: '请上传一个文件，只支持上传csv文件',
    title: 't-SNE：t-SNE降维法',
    detail: 't-SNE算法是一种非线性算法，全名为t分布随机邻域嵌入，是一种用于探索高维数据的非线性降维机器学习算法，其可以多维数据映射到适合于人类观察的两个或多个维度。',
    dataNum: 1,
    type: '数据分析工具',
    text: '需填写降低后的维度N然后上传1个 csv 文件，维度只能选大于1的整数，表示降低到N维，返回降维后的文件，上传文件如下图所示：',
    srcs: [require('../assets/tip/pca.png')]
  },
  {
    name: 'Ttest',
    arg: {
      isRequired: true,
      text: '请输入待检验参数p'
    },
    requireText: '请上传一个文件，只支持上传csv文件',
    title: '单样本t检验',
    detail: '单样本t检验用于分析定量数据是否与某个常数数字有着显著的差异性。单样本是指研究者从关心的总体中抽样而得到的一组具有代表性的样本。',
    dataNum: 1,
    type: '数据分析工具',
    text: '需填写待检验的常数值p然后上传1个 csv 文件，文件数据需服从正态分布，检验数据是否与常数p存在显著差异，返回检验后的各指标结果，上传文件如下图所示：',
    srcs: [require('../assets/tip/ttest.png')]
  },
  {
    name: 'ploydata',
    arg: {
      isRequired: false,
    },
    requireText: '请上传一个文件，只支持上传csv文件',
    title: '插值法处理缺失值',
    detail: '在数据挖掘中，原始数据中存在着大量不完整、偏离的数据。这些问题数据轻则影响数据挖掘执行效率，重则影响执行结果。因此数据预处理工作必不可少，而其中常见工作的就是数据集的缺失值处理。 此处采用拉格朗日法进行插补。',
    dataNum: 1,
    type: '数据分析工具',
    text: '只允许上传1个 csv 文件，会根据拉格朗日插值法处理数据中的缺失值，返回处理后的csv文件，上传文件如下图所示：',
    srcs: [require('../assets/tip/poly.png')]
  },
  {
    name: 'wordCloud',
    arg: {
      isRequired: false,
      text: '（可选）上传词云形状图，图片大小不超过1M',
    },
    requireText: '请上传一个文件，只支持上传txt文件',
    title: '词云生成',
    detail: '“词云”就是对网络文本中出现频率较高的“关键词”予以视觉上的突出，形成“关键词云层”或“关键词渲染”，从而过滤掉大量的文本信息，使浏览网页者只要一眼扫过文本就可以领略文本的主旨。',
    dataNum: 1,
    type: '数据分析工具',
    text: '只允许上传1个 txt 文件，默认为圆形词云，返回词云图'
  },
  // {
  //   name: 'pdf2word',
  //   arg: {
  //     isRequired: false,
  //   },
  //   requireText: '请上传一个文件，只支持上传pdf文件',
  //   title: 'PDF：文献PDF内容提取',
  //   detail: '将PDF格式的文献或其他文件通过python的pdfminer库转换为word格式的文件',
  //   dataNum: 1,
  //   type: '数据分析工具'
  // },
  {
    name: 'getFreqWord',
    arg: {
      isRequired: false,
    },
    requireText: '请上传一个文件，只支持上传txt文件',
    detail: '',
    dataNum: 1,
    title: '文本关键词提取',
    type: '数据分析工具',
    text: '只允许上传1个 txt 文件，返回文章的8位关键词'
  },
  {
    name: 'getSenti',
    arg: {
      isRequired: false,
    },
    requireText: '请上传一个文件，只支持上传txt文件',
    detail: '',
    dataNum: 1,
    type: '数据分析工具',
    title: '文本情感分析',
    text: '只允许上传1个 txt 文件，返回文章的情感分析情况，包括极性与主观性'
  },
  {
    name: 'mic',
    arg: {
      isRequired: false,
    },
    requireText: '请上传两个csv文件供mic分析',
    detail: 'MIC即最大互信息系数，使用MIC来衡量两个变量之间的关联程度，线性或非线性关系，其相较于互信息（MI）而言有更高的准确度。MIC具有普适性，其不仅可以发现变量间的线性函数关系，还能发现非线性函数关系、非函数关系，另外MIC具有均衡性，对于相同噪声水平的函数关系或非函数关系，MIC度量具有近似的值。所以其不仅可以用来纵向比较同一相关关系的强度，还可以横向比较不同关系的强度',
    dataNum: 2,
    type: '数据分析工具',
    title: 'MIC分析',
    text: '需同时上传两个 csv 文件，返回两个列向量之间的最大互信息系数，其越接近于1代表数据之间的关联程度越强'
  },
  {
    name: 'getFreq',
    arg: {
      isRequired: false,
    },
    requireText: '请上传一个文件，只支持上传txt文件',
    detail: '',
    dataNum: 1,
    type: '数据分析工具',
    title: '文本词频统计',
    text: '只允许上传1个 txt 文件，目前只支持英文词频统计，返回文章的单词出现次数统计表'
  },
  // {
  //   name: 'dtw',
  //   arg: {
  //     isRequired: false,
  //   },
  //   requireText: '请上传两个文件，txt',
  //   detail: 'dtw分析',
  //   dataNum: 2,
  //   type: '数据分析工具',
  //   title: 'dtw'
  // }
]