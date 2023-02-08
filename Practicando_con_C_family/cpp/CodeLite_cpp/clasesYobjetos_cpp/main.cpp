#include <iostream>
#include <string.h>
#include <math.h>
#include <conio.h>

using namespace std;


class Aviones {
    private:
		char marca[20];
	    char modelo[20];
    
    public:
        Aviones ();
        char* getmarca();
        virtual void leer();
		
        virtual int getcapiVIP() {
            return getcapiVIP();
        }
        virtual int getcapiTUR() {
            return getcapiTUR();
        }
        //virtual int getcapiTON();
        
		virtual int tipo() {
			return(1);
		}
};

class aviPasajeros: public Aviones  {
	private:
        int capiVIP;
        int capiTUR;
	public:
        aviPasajeros ();
        int getcapiVIP();
        int getcapiTUR();
        void leer();
        int tipo() {
            return(1);
        }
};

class aviCargo: public Aviones  {
	private:
		int capiTON;
	public:
        aviCargo ();
        //int getcapiTON();
        void leer();
        int tipo() {
            return(2);
        }
};

class Aeropuerto {
	private:
		char nombre[20];
	    char direccion[20];
		int numlist;
		Aviones *aviones[60];
	public:
        Aeropuerto ();
        int getNlista();
        void leer();
        void infor();
};


Aeropuerto::Aeropuerto () {
	strcpy(nombre,"");
	strcpy(direccion,"");
	numlist = 0;
}

Aviones::Aviones () {
	strcpy(marca,"");
	strcpy(modelo,"");
}

aviPasajeros::aviPasajeros () {
    capiVIP=0;
    capiTUR=0;
}

aviCargo::aviCargo () {
    capiTON=0;
}

int Aeropuerto::getNlista() {
	return(numlist);
}

void Aeropuerto::leer() {
	int opcion;
	cout<<"Ingrese Nombre del Aeropuerto:"<<endl;
	cin>>nombre;
	cout<<"Ingrese direccion:"<<endl;
	cin>>direccion;
	cout<<"Ingrese cuantas aviones hay:"<<endl;
	cin>>numlist;
	for(int i=0;i<getNlista();i++){
		cout<<"Escoja la opcion"<<endl;
		cout<<"1.- Avion de Pasajeros"<<endl;
		cout<<"2.- Avion de Carga"<<endl;
		cin>>opcion;
	    switch(opcion){
		 	case 1:aviones[i]=new aviPasajeros; break;
		 	case 2:aviones[i]=new aviCargo; break;
		 }
		aviones[i]->leer();
	}
}

void Aviones::leer() {
    cout<<"ingrese marca:"<<endl;
	cin>>marca;
	cout<<"ingrese modelo:"<<endl;
	cin>>modelo;
}

void aviPasajeros::leer() {
    Aviones::leer();
	cout<<"ingrese cuantos pasajeros VIP:"<<endl;
	cin>>capiVIP;
	cout<<"ingrese cuantos pasajeros TURISTAS:"<<endl;
	cin>>capiTUR;
}

void aviCargo::leer() {
    Aviones::leer();
	cout<<"ingrese cuanta capacidad de carga:"<<endl;
	cin>>capiTON;
}

int aviPasajeros::getcapiVIP() {
	return(capiVIP);
}
int aviPasajeros::getcapiTUR() {
	return(capiTUR);
}
char* Aviones::getmarca() {
    return(marca);
}
void Aeropuerto::infor() {
    int pasaj;
    cout << "\nIngrese la capacidad en pasajeros, iguales o mayores a: " << endl;
    cin>>pasaj;
    cout << "Aeropuerto: " << nombre <<endl;
    cout << "Direccion: " << direccion <<endl;
    for (int i=0; i<getNlista(); i++) {
        if (aviones[i]->tipo()==1) {
            int totalPasaj = 0;
            totalPasaj = aviones[i]->getcapiVIP() + aviones[i]->getcapiTUR();
            if (totalPasaj >=pasaj) {
                cout << "... avion " << aviones[i]->getmarca() << " ";
                cout << " Total capacidad VIP(" << aviones[i]->getcapiVIP() << ") y TUR(" << aviones[i]->getcapiTUR() \
                << ") es " << totalPasaj << endl;
            }
        }
    }
}

int main() {
    //Hecho por adalsus
    
    cout << "Bienvenido al Aeropuerto" << endl;
    Aeropuerto airpor;
    airpor.leer();
    airpor.infor();
    return 0;
}
