import { useEffect, useMemo, useState } from "react";
import { mockPatients } from "../constants/patientList";

function usePatientList() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState<
    {
      id: number;
      fullName: string;
      age: number;
      phone: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  const paginatedData = useMemo(() => {
    if (loading || !data || data.length === 0) return [];

    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, page, rowsPerPage, loading]);

  const handleSetPage = (newPage: number) => setPage(newPage);
  const handleSetRowsPerPage = (size: number) => setRowsPerPage(size);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    const timer = setTimeout(() => {
      setData(mockPatients);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleShowDeleteModal = () => {};
  const handleShowModalDoctorDetail = () => {};

  return {
    page,
    loading,
    rowsPerPage,
    paginatedData,
    totalDataCount: data.length,
    handleSetPage,
    handleSetRowsPerPage,
    handleShowDeleteModal,
    handleShowModalDoctorDetail,
  };
}

export default usePatientList;
