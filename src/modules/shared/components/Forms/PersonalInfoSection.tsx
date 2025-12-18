import { Box, Grid, Typography, useTheme } from "@mui/material";
import { FiUser } from "react-icons/fi";
import type { Dayjs } from "dayjs";
import { useState } from "react";

import PaperComponent from "@components/PaperComponent";
import TextFieldComponent from "@components/Inputs/TextFieldComponent";
import AvatarComponent from "@components/AvatarComponent";
import { DatePickerComponent, TextFieldPhone } from "@components/Inputs";

const PersonalInfoSection = () => {
  const themeStyle = useTheme();

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [birthDate, setBirthDate] = useState<Dayjs | null>(null);

  const [avatarImage, setAvatarImage] = useState<string | undefined>(undefined);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const textFieldName = {
    id: "firstName",
    value: firstName,
    disabled: false,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setFirstName(e.target.value),
    handleOnBlur: () => {},
    helperText: "",
    error: false,
  };

  const textFieldMiddleName = {
    id: "middleName",
    value: middleName,
    disabled: false,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setMiddleName(e.target.value),
    handleOnBlur: () => {},
    helperText: "",
    error: false,
  };

  const textFieldLastName = {
    id: "lastName",
    value: lastName,
    disabled: false,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setLastName(e.target.value),
    handleOnBlur: () => {},
    helperText: "",
    error: false,
  };

  const textFieldAddress = {
    id: "address",
    value: address,
    disabled: false,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setAddress(e.target.value),
    handleOnBlur: () => {},
    helperText: "",
    error: false,
  };

  const textFieldOccupation = {
    id: "occupation",
    value: occupation,
    disabled: false,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setOccupation(e.target.value),
    handleOnBlur: () => {},
    helperText: "",
    error: false,
  };

  const textFieldPhone = {
    id: "phone-input",
    value: phoneValue,
    error: phoneValue.length > 0 && phoneValue.length < 8,
    helperText:
      phoneValue.length > 0 && phoneValue.length < 8
        ? "Teléfono incompleto"
        : "",
    disabled: false,
    handleChange: (val: string) => setPhoneValue(val),
    handleOnBlur: () => {},
  };

  const datePicker = {
    id: "birth-date-picker",
    label: "Fecha de Nacimiento",
    value: birthDate,
    // Validación: Error si hay un valor pero es inválido, o si necesitas que sea obligatorio
    error: birthDate !== null && !birthDate.isValid(),
    helperText:
      birthDate !== null && !birthDate.isValid()
        ? "Fecha inválida"
        : "Formato: DD/MM/YYYY",
    disabled: false,
    required: true,
    onChange: (newValue: Dayjs | null) => setBirthDate(newValue),
    handleOnBlur: () => {},
  };

  return (
    <PaperComponent color="neutral">
      <Box sx={{ display: "flex", alignItems: "center", mb: 2.5 }}>
        <FiUser size={24} style={{ marginRight: 8 }} />
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Datos Personales
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{
          alignItems: "center",
          justifyContent: {
            xs: "center",
            lg: "left",
          },
        }}
      >
        <Grid>
          <Box display="flex" flexDirection="column" alignItems="center">
            <label htmlFor="avatar-upload">
              <AvatarComponent
                themeStyle={themeStyle}
                name={
                  textFieldName.value.trim() +
                  " " +
                  textFieldMiddleName.value.trim() +
                  " " +
                  textFieldLastName.value.trim()
                }
                srcImage={avatarImage}
                tooltipTitle={undefined}
                disableInteractive={false}
                placement={undefined}
              />
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="avatar-upload"
                type="file"
                onChange={handleAvatarChange}
              />
            </label>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 3, lg: 3 }}>
          <TextFieldComponent
            fullWidth
            required
            type="text"
            placeholder="Juan"
            label="Primer nombre"
            ariaLabel="Primer nombre"
            id={textFieldName.id}
            value={textFieldName.value}
            disabled={textFieldName.disabled}
            onChange={textFieldName.handleChange}
            handleOnBlur={textFieldName.handleOnBlur}
            helperText={textFieldName.helperText}
            error={textFieldName.error}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3, lg: 3 }}>
          <TextFieldComponent
            fullWidth
            type="text"
            label="Segundo nombre"
            ariaLabel="Segundo nombre"
            placeholder="Carlos (Opcional)"
            id={textFieldMiddleName.id}
            value={textFieldMiddleName.value}
            disabled={textFieldMiddleName.disabled}
            onChange={textFieldMiddleName.handleChange}
            handleOnBlur={textFieldMiddleName.handleOnBlur}
            helperText={textFieldMiddleName.helperText}
            error={textFieldMiddleName.error}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3, lg: 4 }}>
          <TextFieldComponent
            fullWidth
            required
            type="text"
            label="Apellidos"
            ariaLabel="Apellidos"
            placeholder="Pérez García"
            id={textFieldLastName.id}
            value={textFieldLastName.value}
            disabled={textFieldLastName.disabled}
            onChange={textFieldLastName.handleChange}
            handleOnBlur={textFieldLastName.handleOnBlur}
            helperText={textFieldLastName.helperText}
            error={textFieldLastName.error}
          />
        </Grid>

        {datePicker && (
          <Grid size={{ xs: 12, md: 3, lg: 4 }}>
            <DatePickerComponent
              id={datePicker.id}
              label={datePicker.label}
              value={datePicker.value}
              onChange={datePicker.onChange}
              error={datePicker.error}
              helperText={datePicker.helperText}
              disabled={datePicker.disabled}
              required={datePicker.required}
              onBlur={datePicker.handleOnBlur}
            />
          </Grid>
        )}

        {textFieldPhone && (
          <Grid
            size={{ xs: 12, md: 3, lg: 4 }}
            sx={{
              alignSelf: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <TextFieldPhone
              label="Teléfono"
              id={textFieldPhone.id}
              value={textFieldPhone.value}
              error={textFieldPhone.error}
              disabled={textFieldPhone.disabled}
              helperText={textFieldPhone.helperText}
              onBlur={textFieldPhone.handleOnBlur}
              onChange={textFieldPhone.handleChange}
            />
          </Grid>
        )}
        {textFieldAddress && (
          <Grid
            size={{ xs: 12, md: 3, lg: 4 }}
            sx={{
              alignSelf: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <TextFieldComponent
              fullWidth
              type="text"
              placeholder="Calle Falsa 123"
              label="Dirección"
              ariaLabel="Dirección"
              id={textFieldAddress.id}
              value={textFieldAddress.value}
              disabled={textFieldAddress.disabled}
              onChange={textFieldAddress.handleChange}
              handleOnBlur={textFieldAddress.handleOnBlur}
              helperText={textFieldAddress.helperText}
              error={textFieldAddress.error}
            />
          </Grid>
        )}
        {textFieldOccupation && (
          <Grid
            size={{ xs: 12, md: 3, lg: 4 }}
            sx={{
              alignSelf: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <TextFieldComponent
              fullWidth
              type="text"
              label="Ocupación"
              ariaLabel="Ocupación"
              id={textFieldOccupation.id}
              value={textFieldOccupation.value}
              disabled={textFieldOccupation.disabled}
              onChange={textFieldOccupation.handleChange}
              handleOnBlur={textFieldOccupation.handleOnBlur}
              helperText={textFieldOccupation.helperText}
              error={textFieldOccupation.error}
            />
          </Grid>
        )}
        {/* {selectGender && (
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <SelectComponent
              required
              id="gender"
              label="Género"
              onChange={selectGender.onChange}
              options={GENDER_OPTIONS}
              value={selectGender.value || ""}
              helperText={selectGender.helperText}
              error={selectGender.error}
              disabled={selectGender.disabled}
              handleOnBlur={selectGender.handleOnBlur}
            />
          </Grid>
        )}
        {complete_odontogram && (
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <CheckboxComponent
              id="complete_odontogram"
              label="Odontograma Completo"
              checked={complete_odontogram.checked}
              disabled={complete_odontogram.disabled}
              onChange={complete_odontogram.onChange}
            />
          </Grid>
        )} */}
      </Grid>
    </PaperComponent>
  );
};

export default PersonalInfoSection;
