// JavaScript Document
$(document).ready(function() {
    condition();
});


function condition() {

    var age = $('input[name="age"]:checked').val();
    var ans = $('input[name="ans"]:checked').val();
    var inter = $('input[name="inter"]:checked').val();
    var budget = $('input[name="budget"]:checked').val();
    if (age == "30-39" && ans == "Yes" && inter == "Fashion" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }


    if (age == "30-39" && ans == "No" && inter == "Fashion" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }


    if (age == "30-39" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Accessories &  jewellery" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Shoes & bags" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Shoes & bags" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Household and electronics" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Household and electronics" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Fashion" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Fashion" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Accessories &  jewellery" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Shoes & bags" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Shoes & bags" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Household and electronics" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Household and electronics" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Fashion" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Fashion" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Accessories &  jewellery" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Shoes & bags" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Shoes & bags" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Household and electronics" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Household and electronics" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Fashion" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Fashion" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Accessories &  jewellery" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Shoes & bags" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Shoes & bags" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Household and electronics" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Household and electronics" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Household and electronics" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Household and electronics" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Fashion" && budget == "60 and above") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Fashion" && budget == "60 and above") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "60 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Accessories &  jewellery" && budget == "60 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "60 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "60 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Shoes & bags" && budget == "60 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Shoes & bags" && budget == "60 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "Yes" && inter == "Household and electronics" && budget == "60 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "30-39" && ans == "No" && inter == "Household and electronics" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Fashion" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Fashion" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Accessories &  jewellery" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Shoes & bags" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Shoes & bags" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Household and electronics" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Household and electronics" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Fashion" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Fashion" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Accessories &  jewellery" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Shoes & bags" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Shoes & bags" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Household and electronics" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Household and electronics" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Fashion" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Fashion" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Accessories &  jewellery" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Shoes & bags" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Shoes & bags" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Household and electronics" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Household and electronics" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Fashion" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Fashion" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Accessories &  jewellery" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Shoes & bags" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Shoes & bags" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Household and electronics" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Household and electronics" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Fashion" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Fashion" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Accessories &  jewellery" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Shoes & bags" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Shoes & bags" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "Yes" && inter == "Household and electronics" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "40-49" && ans == "No" && inter == "Household and electronics" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Fashion" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Fashion" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Accessories &  jewellery" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Shoes & bags" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Shoes & bags" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Household and electronics" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Household and electronics" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Fashion" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Fashion" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';

        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Accessories &  jewellery" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';

        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Shoes & bags" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Shoes & bags" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Household and electronics" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Household and electronics" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Fashion" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Fashion" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Accessories &  jewellery" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Shoes & bags" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Shoes & bags" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Household and electronics" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Household and electronics" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Fashion" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Fashion" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Accessories &  jewellery" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Shoes & bags" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Shoes & bags" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Household and electronics" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Household and electronics" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Fashion" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Fashion" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Accessories &  jewellery" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Shoes & bags" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Shoes & bags" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "Yes" && inter == "Household and electronics" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "50-59" && ans == "No" && inter == "Household and electronics" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Fashion" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Fashion" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';

        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Accessories &  jewellery" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Shoes & bags" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Shoes & bags" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Household and electronics" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Household and electronics" && budget == "Less than 200") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Fashion" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Fashion" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "200-400") {

        var maintext = "<div>Accessorize</div>" +
                "<div>Glitter</div>" +
                "<div>Tie Shop</div>" +
                "<div>Pour Toi</div>";
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Accessories &  jewellery" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Shoes & bags" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Shoes & bags" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Household and electronics" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Household and electronics" && budget == "200-400") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Fashion" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Fashion" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Accessories &  jewellery" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Shoes & bags" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Shoes & bags" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Household and electronics" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Household and electronics" && budget == "400-600") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Fashion" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Fashion" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Accessories &  jewellery" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Shoes & bags" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Shoes & bags" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Household and electronics" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Household and electronics" && budget == "600-1000") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Fashion" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Fashion" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >H&M</div>\n\
<div class="shop2" >02 24803785</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A25 , A24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Daly Dress</div>\n\
<div class="shop2" >02 25204476</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A27</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Evans</div>\n\
<div class="shop2" >02 24803780</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Suite Blanco</div>\n\
<div class="shop2" >02 2520 4189</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Punt Roma</div>\n\
<div class="shop2" >02 2520 4488</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A42</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Terranova</div>\n\
<div class="shop2" >02 25204383</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >12/13/14</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Vero Moda</div>\n\
<div class="shop2" >02 25204028</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >6/7</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Calliope</div>\n\
<div class="shop2" >02 25204465</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A11</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Zara</div>\n\
<div class="shop2" >02 25204041</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >30/31</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Hijaby</div>\n\
<div class="shop2" >02 2520 4461</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A41</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Monsoon</div>\n\
<div class="shop2" >01154000471</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Accessories &  jewellery" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>' ;
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Accessories &  jewellery" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Accessorize</div>\n\
<div class="shop2" >01154000459</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Glitter</div>\n\
<div class="shop2" >02 2520 4373</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >29</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Guess Accessories</div>\n\
<div class="shop2" >02 2520 4415</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >16</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Tie Shop</div>\n\
<div class="shop2" >02 2520 4441</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >2</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Pour Toi</div>\n\
<div class="shop2" >02 2520 4393</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >36/37</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Big Boys</div>\n\
<div class="shop2" >02 2520 4428</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >3</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Damas</div>\n\
<div class="shop2" >02 2520 4475</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A33</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Talaat El Sergany</div>\n\
<div class="shop2" >02 2520 4384</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >15</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Time Trade</div>\n\
<div class="shop2" >02 25204193</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A23</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Maghrabi</div>\n\
<div class="shop2" >02 2520 4495</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A35</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Grand Optics</div>\n\
<div class="shop2" >02 2520 4370</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >C&CO</div>\n\
<div class="shop2" >02 2520 4071</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A16</div>\n\
</div>' ;
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Perfumes & cosmetics , optical" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Perfumes & cosmetics , optical" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Bath & Body Works</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A21, A22</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Faces</div>\n\
<div class="shop2" >02 2520 4395-6</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A28</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >The Body Shop</div>\n\
<div class="shop2" >02 24803781</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A34</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Shoes & bags" && budget == "1000 and above") {

       var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';

        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Shoes & bags" && budget == "1000 and above") {

       var maintext = '<div class="shop"><div class="shop1" >Vincci</div>\n\
<div class="shop2" >02 25204462</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A38</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Aldo</div>\n\
<div class="shop2" >02 25204013</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Charles & Keith</div>\n\
<div class="shop2" >02 2520 4498</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A40</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Nine West</div>\n\
<div class="shop2" >01154000458</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >18</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Payless</div>\n\
<div class="shop2" >02 24803782</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A32b</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Rockport</div>\n\
<div class="shop2" >01274306000</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A36</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Scarpa</div>\n\
<div class="shop2" >02 2520 4411</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >4</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Crocs</div>\n\
<div class="shop2" >01012220422</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Converse</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>';

        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "Yes" && inter == "Household and electronics" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

    if (age == "60 and above" && ans == "No" && inter == "Household and electronics" && budget == "1000 and above") {

        var maintext = '<div class="shop"><div class="shop1" >Radio Shack</div>\n\
<div class="shop2" >02 2520 4386</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >24</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >iShop</div>\n\
<div class="shop2" >02 25204070</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >39</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Select</div>\n\
<div class="shop2" ></div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >A09</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Mobile Shop</div>\n\
<div class="shop2" >01 008981316</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >10</div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Carrefour</div>\n\
<div class="shop2" >02 2520 4300</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" ></div>\n\
</div>' +
                '<div class="shop"><div class="shop1" >Centre point</div>\n\
<div class="shop2" >02 2520 4012</div>\n\
<div class="shop3" >Ground</div>\n\
<div class="shop4" >40</div>\n\
</div>';
        $(".result_me").html(maintext);
    }

}

function removeCheck() {

    $("input").removeAttr('checked');

}