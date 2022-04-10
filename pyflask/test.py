from sklearn.datasets import load_boston
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
import numpy as np
wine = load_boston()
train_data,test_data,train_target,test_target = train_test_split(wine.data,wine.target,test_size = 0.1)

for j in range(500):
    temp = [float(i) for i in train_data[j]]
    tem = int(train_target[j])
    temp.append(tem)
    print(temp)


