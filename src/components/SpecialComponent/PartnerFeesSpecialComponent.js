import * as Modules from "../../components/Imports/Index";

function PartnerFeesSpecialComponent(props) {

    console.log(JSON.stringify(props.data))

    return (
        <Modules.Table
            stickyHeader
            aria-label="sticky table"
            id="divToDisplay"
        >
            <Modules.TableHead>
                <Modules.TableRow>
                    <Modules.TableCell
                        style={{
                            minWidth: 100,
                            backgroundColor: "#3f51b5",
                            color: "#fff",
                        }}
                    >
                        {"DE"}
                    </Modules.TableCell>
                    <Modules.TableCell
                        style={{
                            minWidth: 100,
                            backgroundColor: "#3f51b5",
                            color: "#fff",
                        }}
                    >
                        {"A"}
                    </Modules.TableCell>
                    <Modules.TableCell
                        style={{
                            minWidth: 100,
                            backgroundColor: "#3f51b5",
                            color: "#fff",
                        }}
                    >
                        {"VALEUR"}
                    </Modules.TableCell>
                    <Modules.TableCell
                        style={{
                            minWidth: 100,
                            backgroundColor: "#3f51b5",
                            color: "#fff",
                        }}
                    >
                        {"FRAIS MIN"}
                    </Modules.TableCell>
                    <Modules.TableCell
                        style={{
                            minWidth: 100,
                            backgroundColor: "#3f51b5",
                            color: "#fff",
                        }}
                    >
                        {"FRAIS MAX"}
                    </Modules.TableCell>
                    <Modules.TableCell
                        style={{
                            minWidth: 100,
                            backgroundColor: "#3f51b5",
                            color: "#fff",
                        }}
                    >
                        {"TYPE VALEUR FRAIS"}
                    </Modules.TableCell>
                </Modules.TableRow>
            </Modules.TableHead>
            <Modules.TableBody>
                {props.data.map((row, key) => {
                    return (
                        <Modules.TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={key}
                        >
                            <Modules.TableCell>
                                {row.slot.ceilMin}
                            </Modules.TableCell>
                            <Modules.TableCell>
                                {row.slot.ceilMax}
                            </Modules.TableCell>
                            <Modules.TableCell>
                                {row.slot.value}
                            </Modules.TableCell>
                            <Modules.TableCell>
                                {row.slot.min}
                            </Modules.TableCell>
                            <Modules.TableCell>
                                {row.slot.max}
                            </Modules.TableCell>
                            <Modules.TableCell>
                                {row.slot.valueType}
                            </Modules.TableCell>
                        </Modules.TableRow>
                    );
                })}
            </Modules.TableBody>
        </Modules.Table>
    )
}

export default PartnerFeesSpecialComponent;
