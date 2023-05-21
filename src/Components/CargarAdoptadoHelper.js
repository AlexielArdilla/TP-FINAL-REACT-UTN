import { useForm } from "react-hook-form";
import "./Registro.css";
import { update, getById } from "../Services/productosService";
import { useEffect, useState } from "react";
import { registroMessage } from "../Utils/errorMessage";
import TablaPerros from "../Pages/TablaPerros";
import { useParams } from "react-router-dom";

function ProductosModificar() {

    const { id } = useParams();

    const {
        //register,
        //handleSubmit,
        setValue
    } = useForm({ mode: "onChange" });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ variant: "", text: "" });

    useEffect(() => {
        const result = async () => {
            setLoading(true);
            try {
                setLoading(true);
                const response = await getById(id);
                setValue("title", response.data().title);
                setValue("price", response.data().price);
                setValue("thumbnail", response.data().thumbnail);
                setValue("categoria", response.data().categoria);
                setValue("adoptado", response.data().adoptado);

                setLoading(false);

                setAlert({
                    variant: "success",
                    text: "Modificado con éxito",
                    duration: 3000,
                    link: "/"
                });
            } catch (e) {
                console.log(e);
                setAlert({
                    variant: "danger",
                    text: registroMessage[e.code] || "Ha ocurrido un error",
                });
                setLoading(false);
            }
            setAlert({});
        };
        result();
    }, [id, setValue]);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const document = await update(id, data);
            console.log(
                "Desde modificar adoptado:",
                document
            );
            setLoading(false);
            setAlert({
                variant: "success",
                text: "Modificado con éxito",
                duration: 3000,
                link: "/",
            });
        } catch (e) {
            console.log(e.code);
            setAlert({
                variant: "danger",
                text: registroMessage[e.code] || "Ha ocurrido un error",
            });
            setLoading(false);
        }
    };

    return (
       <TablaPerros/>
    );
}

export default ProductosModificar;
