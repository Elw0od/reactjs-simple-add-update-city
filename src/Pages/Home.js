import React from 'react';
import FormCity from '../Components/FormCity'
import CityItem from '../Components/CityItem'
import '../App.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: [],
            currentCity: null
        }
        this.addCity = this
            .addCity
            .bind(this)

        this.updateCity = this
            .updateCity
            .bind(this)
    }

    addCity(Item) {
        let cityArray = this.state.cityList;
        let index = Item.index;
        console.log(index);
        if (index != null) 
            cityArray[index] = Item;
        else {
            cityArray.push(Item);

        }
        this.setState({currentCity: null})
        this.setState({cityList: cityArray});
    }

    updateCity(e) {
        let cityArray = this.state.cityList;
        let city = cityArray[e.target.id];
        city.index = e.target.id;
        console.log(city);
        this.setState({currentCity: city});
    }

    render() {
        return (
            <div className="relative bg-white h-screen w-screen">
                <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                    <div
                        className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                        <h2
                            className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Ajouter une ville
                        </h2>
                        <p className="mt-3 text-lg leading-6 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores neque illo
                            sequi voluptate eum error ex, animi possimus dignissimos nostrum explicabo.
                        </p>
                        <div className="max-w-lg mx-auto mt-10 lg:max-w-none">
                            <FormCity city={this.state.currentCity} onAddCity={this.addCity}/>
                        </div>
                    </div>
                    <div
                        className="bg-gray-200 h-screen py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                        <div className="max-w-lg mx-auto">
                            <h2
                                className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                Ville(s)
                            </h2>
                            <dl className="mt-8 text-base text-gray-500">
                                <ul className="space-y-4">
                                    {this
                                        .state
                                        .cityList
                                        .map((city, index) => {
                                            return <CityItem city={city} key={index} index={index} onUpdateCity={this.updateCity}/>
                                        })
}
                                </ul>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
