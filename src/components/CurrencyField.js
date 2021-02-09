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
            <span className="FormControl">
                <TextField type="number" value={amount} color='primary' onChange={onChangeAmount} />
                <InputLabel id="currency" />
                <Select className="selectCurrency" labelId="currency" id="currency" value={selectCurrency} onChange={onChangeCurrency}>
                    {
                        currencies.map((currency) => (
                            <MenuItem key={currency} value={currency}>{currency}</MenuItem>
                        ))
                    }
                </Select>
            </span>
        </div>
    );
}

export default CurrencyField;