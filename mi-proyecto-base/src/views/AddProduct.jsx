import { useForm, Controller } from "react-hook-form";
import {Button,Form,FormControl,FormGroup, FormText} from "react-bootstrap";
const AddProduct = () => {
  const {register,control,handleSubmit,formState:{errors},reset,}=useForm();
  return (
    <Form>
      <FormGroup>
            <Form.Label>
                Nombre
            </Form.Label>
            <FormControl
            type="text"
            {...register("name",{required:"El nombre es obligatorio"})}
            />
            <FormText>
                {errors.name?.message}
            </FormText>
        </FormGroup>
        <FormGroup>
            <Form.Label>
                Descripción
            </Form.Label>
            <FormControl
            type="text"
            {...register("description",{required:"La descripción es obligatoria"})}
            />
            <FormText>
                {errors.description?.message}
            </FormText>
        </FormGroup>
        <FormGroup>
            <Form.Label>
                Precio
            </Form.Label>
            <FormControl
            type="text"
            {...register("price",{required:"El precio es obligatorio"})}
            />
            <FormText>
                {errors.price?.message}
            </FormText>
        </FormGroup>
        <FormGroup>
            <Form.Label>
                Url de la imagen
            </Form.Label>
            <FormControl
            type="text"
            {...register("src",{required:"La imagen es obligatoria"})}
            />
            <FormText>
                {errors.src?.message}
            </FormText>
        </FormGroup>
        <FormGroup>
            <Button type="submit">Agregar producto</Button>
        </FormGroup>
    </Form>
  )
}

export default AddProduct