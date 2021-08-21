import React, { useEffect, useState, useContext } from "react";
import Result from "./Result";
import axios from "axios";
import * as AppConstant from "./AppConstant";
import useDropDown from "./useDropDown";
import ColorContext from "./ColorContext";

const SearchArea = () => {
    const [themeColor, setThemeColor] = useContext(ColorContext);
    const [keyword, setKeyword] = useState("");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);


    const orderList = ["Date", "Relevance", "Rating", "Title", "Viewcount"];
    const [order, OrderDropdown] = useDropDown("Order->By", "relevance", orderList);
    const [safeSearch, SafesearchDropdown] = useDropDown("Safe->Search", "none", ["Moderate", "None", "Strict"]);

    const [checked, setChecked] = useState(false);
    const [advancedParams, setAdvancedParams] = useState(``);
    useEffect(() => { //its hooks useeffect actually called side effects 
        if (checked) {
            setAdvancedParams(`&order=${order}&safeSearch=${safeSearch}`)
        } else {
            setAdvancedParams(``);
        }
    }, [checked, order, safeSearch]);

    function requestSearch() {
        setLoading(true);
        axios.get(`${AppConstant.SEARCH__URL}&q=${keyword}&order=${order}&safeSearch=${safeSearch}`)
            .then((res) => {
                const { items } = res.data;
                setVideos(items || []);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }
    return (
        <div className="search-area">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestSearch();
            }}>
                <label htmlFor="keyword">
                    Search
                    <input type="text" id="keyword" value={keyword} onChange={(e) => { setKeyword(e.target.value) }}
                    />
                </label>
                <label htmlFor="Advance">
                    Search Options
                    <input type="checkbox" id="advanced"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                </label>
                {
                    checked ? <div>
                        <OrderDropdown />
                        <SafesearchDropdown />

                        <label htmlFor="themeColor">
                            Theme-Color
                            <select
                                value={themeColor}
                                onChange={(e) => setThemeColor(e.target.value)}
                                onBlur={(e) => setThemeColor(e.target.value)}
                            >
                                <option value="orange">Orange</option>
                                <option value="purple">Purple</option>
                                <option value="brown">Brown</option>
                            </select>
                        </label>
                    </div> : null
                }
                {/* <label htmlFor="order">
                    Order:
                    <select
                        id="Order"
                        value={order}
                        onChange={(e) => { setOrder(e.target.value) }}
                        onBlur={(e) => setOrder(e.target.value)}
                    >
                        {orderList.map((orderName) => (
                            <option value={orderName} key={orderName}>
                                {orderName}
                            </option>
                        ))}
                    </select>
                </label> */}
                <button style={{ background: themeColor }}>Submit</button>
            </form>
            <Result videos={videos} loading={loading} />
        </div>
    );
};

export default SearchArea;