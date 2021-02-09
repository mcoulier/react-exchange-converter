import { TextField, Select, InputLabel, MenuItem } from '@material-ui/core';

function CurrencyField(props) {
    const {
        currencies,
        selectCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props

    return (
        <div className="CurrencyField">
            <TextField type="number" value={amount} onChange={onChangeAmount}/>
            <InputLabel id="currency" />
            <Select labelId="currency" id="currency" value={selectCurrency} onChange={onChangeCurrency}>
                {
                    currencies.map((currency) => (
                        <MenuItem key={currency} value={currency}>{currency}</MenuItem>
                    ))
                }
            </Select>
        </div>
    );
}

export default CurrencyField;