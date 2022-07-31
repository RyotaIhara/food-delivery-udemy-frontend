import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const query = gql`
    {
        restaurants {
            id
            name
            description
            image {
                url
            }
        }
    }
`;

const RestaurantList = () => {
    const { loading, error, data } = useQuery(query);
    //console.log(data.restaurants);

    if (data !== undefined ) {
        console.log('定義されてます');
    } else {
        console.log('未定義です');
    }

    if (data) {
        return (
            <Row>
                {data.restaurants.map((res) => (
                    <Col xs="6" sm="4">
                        <Card style={{ margin: "0.0.5rem 20px 0.5rem" }}>
                            <CardImg 
                                //src="http://localhost:1337/uploads/thumbnail_restaurant1_9d349a51a9.jpg" 
                                src={`${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`}
                                top={true} 
                                style={{ height: 250 }} 
                            />
                            <CardBody>
                                <CardTitle>{res.name}</CardTitle>
                                <CardTitle>{res.description}</CardTitle>
                            </CardBody>
                            <div className='card-footer'>
                                <Link 
                                    href={`/restaurants/${res.id}`} 
                                    as={`/restaurants?id=${res.id}`}
                                >
                                    <a className="btn btn-primary">もっと見る</a>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                ))}
                <style jsx>{`
                    a {
                        color: white;
                    }
                    a:link {
                        text-decoration: none;
                        color: white;
                    }
                    a:hover {
                        color: white;
                    }
                    .card-culums {
                        column-connt: 3;
                    }
                `}
                </style>
            </Row>
        );
    } else {
        return (
            <h1>レストランが見つかりませんでした</h1>
        );
    }
    
};

export default RestaurantList;