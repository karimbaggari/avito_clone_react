import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const useCategoryProductsDisplay = () => {
    const { categoryId } = useParams();
    const [Cars, setCars] = useState([]);
    const [Houses, setHouses] = useState([]);
    const [Clothing, setClothing] = useState([]);
    const [Job, setJob] = useState([]);
    const [Company, setCompany] = useState([]);
    const [Leisure, setLeisure] = useState([]);
    const [Gardens, setGardens] = useState([]);


    useEffect(() => {
        const fetchCarsData = async () => {
            const rsp = await fetch("/Vehicules.json");
            const vehicules = await rsp.json();
            setCars(vehicules);
        }
        fetchCarsData();
    }, []);

    useEffect(() => {
        const fetchHousesData = async () => {
            const rsp = await fetch("/immobilier.json");
            const houses = await rsp.json();
            setHouses(houses);
        }
        fetchHousesData();
    }, []);

    useEffect(() => {
        const fetchClothing = async () => {
            const rsp = await fetch("/habillement.json");
            const clothing = await rsp.json();
            setClothing(clothing);
        }
        fetchClothing();
    }, []);

    useEffect(() => {
        const fetchJob = async () => {
            const rsp = await fetch("/emploie.json");
            const emploie = await rsp.json();
            setJob(emploie);
        }
        fetchJob();
    }, [])

    useEffect(() => {
        const fetchCompanies = async () => {
            const rsp = await fetch("/entreprises.json");
            const company = await rsp.json();
            setCompany(company);
        }
        fetchCompanies();
    }, [])

    useEffect(() => {
        const fetchLeuisire = async () => {
            const rsp = await fetch("/loisir.json");
            const leisure = await rsp.json();
            setLeisure(leisure);
        }
        fetchLeuisire();
    }, [])

    useEffect(() => {
        const fetchGardens = async () => {
            const rsp = await fetch("/jardins.json");
            const gardens = await rsp.json();
            setGardens(gardens)
        }
        fetchGardens();
    }, [])

    let DisplayData = [];
    switch (categoryId) {
        case ":1":
            DisplayData = Cars;
            break;
        case ":2":
            DisplayData = Houses;
            break;

        case ":3":
            DisplayData = Job;
            break;

        case ":4":
            DisplayData = Clothing;
            break;

        case ":5":
            DisplayData = Leisure;
            break;

        case ":6":
            DisplayData = Gardens;
            break;

        case ":7":
            DisplayData = Company;
            break;
        default:
            return null;
    }
    return DisplayData;
}
export default useCategoryProductsDisplay;