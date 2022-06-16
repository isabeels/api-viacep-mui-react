import React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box1 from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop: theme.spacing(3),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Input = ({ cep, data, handleCep }) => {
  return (
    <div className="box">
      <h1>Consultar CEP</h1>
      <FormControl sx={{ width: "31ch" }}>
        <OutlinedInput
          type="text"
          placeholder={`Digite o CEP aqui${cep}`}
          onChange={handleCep}
        />
        <FormHelperText />
      </FormControl>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Item>{data.logradouro}</Item>
          <Item>{data.complemento}</Item>
          <Item>{data.bairro}</Item>
          <Item>{data.localidade}</Item>
          <Item>{data.uf}</Item>
        </Stack>
      </Box>
    </div>
  );
};

export default Input;
