/**
* 2007-2024 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2024 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/

let ts_elements = Array.from(document.getElementsByClassName("ts-element"));
let ts_dots = Array.from(document.getElementsByClassName("ts-dot"));
let maxSlides = 0;
let actualSlide = 0;

function slide() {
    ts_elements.forEach(element =>{
        element.style.transform = 'translateX(-' + actualSlide + '00%)';
    });
}

function clearDots(dots) {
    dots.forEach(dot => {
        dot.classList.remove("ts-dot-active");
    });
}

function setDots(dots) {
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            clearDots(dots);
            dot.classList.add("ts-dot-active");
            actualSlide = dot.getAttribute("data-ts-dot");
            slide();
        });
    })
}

setDots(ts_dots);
