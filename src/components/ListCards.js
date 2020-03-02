import React, { Component } from 'react'

export class ListCards extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         Data: [
    //             {
    //                 "title": "yellow",
    //                 "age": "25"
    //             },
    //             {
    //                 "title": "white",
    //                 "age": "55"
    //             },
    //             {
    //                 "title": "red",
    //                 "age": "45"
    //             }
    //         ]
    //     }
    // }
  
        state = {
            Data: [
                {
                    "title": "yellow",
                    "age": "25",
                    "images": "building.jpg"
                },
                {
                    "title": "white",
                    "age": "55"
                },
                {
                    "title": "red",
                    "age": "45"
                },
                {
                    "title": "black",
                    "age": "15"
                }
            ]
        }
    


    render() {
        return (
            <div className="container">
                <div className="">
                    <div className="colBody" >
                        {
                            this.state.Data.map((item, i) => (
                                <div className="cardMain">
                                    <img src={item.images}  />
                                    <p>{item.title}</p>
                                    <p>{item.age}</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default ListCards
