import { TextField, Select, InputLabel, MenuItem } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    primary: {
        main: '#BCFF5C'
    }
})

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
            <TextField type="number" value={amount} color='primary' onChange={onChangeAmount} />
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