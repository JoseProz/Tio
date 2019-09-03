<!DOCTYPE html>
<html>
    <head>
        <title>Ejemplo</title>
    </head>
    <body>

        <?php
            echo "<h1>¡Hola, soy un script de PHP!</h1>";
        ?>
    <?php
        define("CONSTANTE", "Hello world.");
        echo CONSTANTE; // outputs "Hello world."
    ?>



    <?php
        $edades = array(
        "juan" => 35,
        "nico" => 17,
        "julia" => 23
        );
        echo $edades["juan"]; //imprime 35
        echo "///////////////////";
        echo $edades["julia"]; //imprime 23

        echo "suma de edades = " . array_sum($edades) . "\n";
    ?>
    </body>
</html>