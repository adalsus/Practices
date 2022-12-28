# -*- coding: utf-8 -*-
"""
Created on Fri Dec 16 15:54:29 2022

@author: adal
"""

import re
import numpy as np

def iA( A_p=[[]], b_p=[[]] ) :
    mAcoe = A_p.copy()
    mbind = b_p.copy()
    
    #print(mAcoe[1,1])
    #print(mbind[0,0])
    
    nc=2
    valores = [elem[nc] for elem in mAcoe]
    print()
    print(valores)
    
    matrizR = np.hstack((mAcoe,mbind))
    return matrizR

salir = True
while salir :
    matCua = input('Crear Matriz cuadrada de: ')
    try :
        matCua = int(matCua)
        if matCua>=2 :
            salir = False
        else :
            print()
            print("Por favor, ingrese números mayores a 1.")
    except ValueError :
        print()
        print("ATENCIÓN: Debe ingresar sólo números enteros.")
    
print()
matrizA = np.empty((0,1), float)
for f in range(matCua) :
    tamanio = 0
    while tamanio!=matCua :
        vc = input(f'Ingrese los coeficientes de la columna {(f+1)}, separados con espacio: ')
        s = [float(s) for s in re.findall(r'-?\d+\.?\d*', vc)]
        tamanio = len(s)
        if tamanio==matCua :
            matriz = np.empty((0,1), float)
            for e in s :
                matriz = np.append(matriz,np.array([[e]]), axis=0)
            #print(matriz)
            if f==0 :
                matrizA = np.copy(matriz)
        else :
            print('Ingrese',matCua,'números y no', tamanio)
    if f!=0 :
        matrizA = np.hstack((matrizA,matriz))
    #print('Matriz Aumentada')
    #print(matrizA)

numeinde = 0
while numeinde!=matCua :
    ni = input(f'\nIngrese los {matCua} números independientes, separados con espacio: ')
    s = [float(s) for s in re.findall(r'-?\d+\.?\d*', ni)]
    numeinde = len(s)
    if numeinde==matCua :
        matriz = np.empty((0,1), float)
        for e in s :
            matriz = np.append(matriz,np.array([[e]]), axis=0)
        #print(matriz)
    else:
        print('Ingrese',matCua,'números y no', numeinde)
A = np.copy(matrizA)
print('\n\nMatriz con los coeficientes ingresados')
print(A)
b = np.copy(matriz)
print('Matriz Columna de las constantes')
print(b)
matrizA = np.hstack((matrizA,matriz))
print('\nMatriz Aumentada con las constantes ingresadas')
print(matrizA)

matrizRxGJ = iA( A, b )