


export default function Search() {
    return (
        <div >
            <form>
                <label htmlFor="brand">Brand:</label>
                <select id="brand" name="brand">
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="nissan">Nissan</option>
                </select>

                <label htmlFor="model">Model:</label>
                <select id="model" name="model">
                        <option value="corolla">Corolla</option>
                        <option value="camry">Camry</option>
                        <option value="prius">Prius</option>
                        <option value="accord">Accord</option>
                        <option value="civic">Civic</option>
                        <option value="crv">CR-V</option>
                        <option value="altima">Altima</option>
                        <option value="sentra">Sentra</option>
                        <option value="rogue">Rogue</option>
                </select>

                <label htmlFor="brand">Year:</label>
                <select id="year" name="year">
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="nissan">Nissan</option>
                </select>

                <label htmlFor="components">Components:</label>
                <select id="components" name="components">
                    <option value="toyota">Toyota</option>
                    <option value="honda">Honda</option>
                    <option value="nissan">Nissan</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}