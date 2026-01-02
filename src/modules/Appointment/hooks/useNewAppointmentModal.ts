/* eslint-disable no-console */
import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
// Ojo: Si no quieres instalar lodash, puedes usar un timer simple en useEffect.

// Definimos la interfaz aquí o impórtala de tus types
export interface IPatientOption {
  id: number;
  fullName: string;
  phone?: string;
  dni?: string;
}

const useNewAppointmentModal = () => {
  // Estado para la opción seleccionada (El objeto paciente completo)
  const [patient, setPatient] = useState<IPatientOption | null>(null);

  // Estado para la lista de opciones que muestra el dropdown
  const [patientOptions, setPatientOptions] = useState<
    readonly IPatientOption[]
  >([]);

  // Estado para lo que el usuario escribe en el input
  const [inputValue, setInputValue] = useState("");

  const [loading, setLoading] = useState(false);

  // Simulación de llamada a tu API (Reemplaza esto con tu fetch real)
  const fetchPatients = async (query: string) => {
    if (query.length < 2) return; // No buscar si hay menos de 2 letras

    setLoading(true);
    try {
      // const response = await api.get(`/patients?search=${query}`);
      // setPatientOptions(response.data);

      // MOCK PARA EL EJEMPLO:
      console.log("Buscando en API:", query);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setPatientOptions([
        { id: 1, fullName: "Juan Pérez", dni: "00123456-7" },
        { id: 2, fullName: "Juana Lopez", dni: "00987654-3" },
      ]);
    } catch (error) {
      console.error(error);
      setPatientOptions([]);
    } finally {
      setLoading(false);
    }
  };

  // Memoizamos la función debounce para que no se recree en cada render
  const debouncedFetch = useDebouncedCallback((request: { input: string }) => {
    fetchPatients(request.input);
  }, 500); // Espera 500ms después de que el usuario deje de escribir

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let active = true;

    if (inputValue === "") {
      setPatientOptions(patient ? [patient] : []);
      return undefined;
    }

    // Llamamos al debounce
    debouncedFetch({ input: inputValue });

    return () => {
      active = false;
    };
  }, [inputValue, debouncedFetch, patient]);

  // Manejadores para el componente
  const handlePatientChange = (
    _event: any,
    newValue: IPatientOption | null,
  ) => {
    setPatient(newValue);
  };

  const handleInputChange = (_event: any, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  return {
    patient,
    inputValue, // Necesario pasarlo al Autocomplete
    patientOptions,
    loading,
    handlePatientChange,
    handleInputChange, // Necesario pasarlo al Autocomplete
  };
};

export default useNewAppointmentModal;
