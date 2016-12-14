<?php

/* sites/all/themes/vectorplayground/templates/menu/menu--main.html.twig */
class __TwigTemplate_2ac0d2106fc935f267eef248a9df5cd7f25c79eea3df1baeda76c0c444a33244 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("import" => 22, "macro" => 30, "if" => 32, "for" => 38, "set" => 40);
        $filters = array();
        $functions = array("link" => 51);

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('import', 'macro', 'if', 'for', 'set'),
                array(),
                array('link')
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setTemplateFile($this->getTemplateName());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 18
        echo "
<canvas width=\"165\" height=\"165\" id=\"logo\"></canvas>

<nav class=\"row\">
";
        // line 22
        $context["menus"] = $this;
        // line 23
        echo "
";
        // line 28
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar($context["menus"]->getmenu_links((isset($context["items"]) ? $context["items"] : null), (isset($context["attributes"]) ? $context["attributes"] : null), 0)));
        echo "

";
    }

    // line 30
    public function getmenu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $context = $this->env->mergeGlobals(array(
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 31
            echo "  ";
            $context["menus"] = $this;
            // line 32
            echo "  ";
            if ((isset($context["items"]) ? $context["items"] : null)) {
                // line 33
                echo "    ";
                if (((isset($context["menu_level"]) ? $context["menu_level"] : null) == 0)) {
                    // line 34
                    echo "      <ul";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => "menu", 1 => "nav", 2 => "navbar-nav"), "method"), "html", null, true));
                    echo ">
    ";
                } else {
                    // line 36
                    echo "      <ul";
                    echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => "dropdown-menu"), "method"), "html", null, true));
                    echo ">
    ";
                }
                // line 38
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((isset($context["items"]) ? $context["items"] : null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 39
                    echo "      ";
                    // line 40
                    $context["item_classes"] = array(0 => "expanded", 1 => "dropdown", 2 => (($this->getAttribute(                    // line 43
$context["item"], "in_active_trail", array())) ? ("active") : ("")));
                    // line 46
                    echo "      ";
                    if ((((isset($context["menu_level"]) ? $context["menu_level"] : null) == 0) && $this->getAttribute($context["item"], "is_expanded", array()))) {
                        // line 47
                        echo "        <li";
                        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "addClass", array(0 => (isset($context["item_classes"]) ? $context["item_classes"] : null)), "method"), "html", null, true));
                        echo ">
        <a href=\"";
                        // line 48
                        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array()), "html", null, true));
                        echo "\" class=\"dropdown-toggle\" data-target=\"#\" data-toggle=\"dropdown\">";
                        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($context["item"], "title", array()), "html", null, true));
                        echo " <span class=\"caret\"></span></a>
      ";
                    } else {
                        // line 50
                        echo "        <li";
                        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], "attributes", array()), "addClass", array(0 => (isset($context["item_classes"]) ? $context["item_classes"] : null)), "method"), "html", null, true));
                        echo ">
        ";
                        // line 51
                        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->env->getExtension('drupal_core')->getLink($this->getAttribute($context["item"], "title", array()), $this->getAttribute($context["item"], "url", array())), "html", null, true));
                        echo "
      ";
                    }
                    // line 53
                    echo "      ";
                    if ($this->getAttribute($context["item"], "below", array())) {
                        // line 54
                        echo "        ";
                        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar($context["menus"]->getmenu_links($this->getAttribute($context["item"], "below", array()), $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "removeClass", array(0 => "nav", 1 => "navbar-nav"), "method"), ((isset($context["menu_level"]) ? $context["menu_level"] : null) + 1))));
                        echo "
      ";
                    }
                    // line 56
                    echo "      </li>
    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 58
                echo "    </ul>
  </nav>
  <div class=\"nav-background\"></div>
    <?xml version=\"1.0\" encoding=\"utf-8\"?>
    <svg version=\"1.1\" id=\"hamburger-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"
    \t viewBox=\"0 0 171 171\" style=\"enable-background:new 0 0 171 171;\" xml:space=\"preserve\">
    <style type=\"text/css\">
    \t.st0{fill:#3a0460;}
    </style>
    <g id=\"hamburger\">
    \t<path id=\"veggie-patty\" class=\"st0\" d=\"M126.5,88h-81c-1.7,0-3-1.3-3-3s1.3-3,3-3h81c1.7,0,3,1.3,3,3S128.2,88,126.5,88z\"/>
    \t<path id=\"lower-bun\" class=\"st0\" d=\"M126.5,70h-81c-1.7,0-3-1.3-3-3s1.3-3,3-3h81c1.7,0,3,1.3,3,3S128.2,70,126.5,70z\"/>
    \t<path id=\"upper-bun\" class=\"st0\" d=\"M126.5,106h-81c-1.7,0-3-1.3-3-3s1.3-3,3-3h81c1.7,0,3,1.3,3,3S128.2,106,126.5,106z\"/>
    </g>
    <g id=\"close\">
    \t<circle id=\"circle\" class=\"st0\" cx=\"86\" cy=\"85\" r=\"1.9\"/>
    \t<path id=\"lower-line\" class=\"st0\" d=\"M112.5,115.8L55.2,58.5c-1.2-1.2-1.2-3.1,0-4.2c1.2-1.2,3.1-1.2,4.2,0l57.3,57.3
    \t\tc1.2,1.2,1.2,3.1,0,4.2C115.6,116.9,113.7,116.9,112.5,115.8z\"/>
    \t<path id=\"upper-line\" class=\"st0\" d=\"M116.8,58.5l-57.3,57.3c-1.2,1.2-3.1,1.2-4.2,0c-1.2-1.2-1.2-3.1,0-4.2l57.3-57.3
    \t\tc1.2-1.2,3.1-1.2,4.2,0C117.9,55.4,117.9,57.3,116.8,58.5z\"/>
    </g>
    </svg>
  ";
            }
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "sites/all/themes/vectorplayground/templates/menu/menu--main.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  147 => 58,  140 => 56,  134 => 54,  131 => 53,  126 => 51,  121 => 50,  114 => 48,  109 => 47,  106 => 46,  104 => 43,  103 => 40,  101 => 39,  96 => 38,  90 => 36,  84 => 34,  81 => 33,  78 => 32,  75 => 31,  61 => 30,  54 => 28,  51 => 23,  49 => 22,  43 => 18,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Default theme implementation to display a menu.*/
/*  **/
/*  * Available variables:*/
/*  * - menu_name: The machine name of the menu.*/
/*  * - items: A nested list of menu items. Each menu item contains:*/
/*  *   - attributes: HTML attributes for the menu item.*/
/*  *   - below: The menu item child items.*/
/*  *   - title: The menu link title.*/
/*  *   - url: The menu link url, instance of \Drupal\Core\Url*/
/*  *   - localized_options: Menu link localized options.*/
/*  **/
/*  * @ingroup templates*/
/*  *//* */
/* #}*/
/* */
/* <canvas width="165" height="165" id="logo"></canvas>*/
/* */
/* <nav class="row">*/
/* {% import _self as menus %}*/
/* */
/* {#*/
/*   We call a macro which calls itself to render the full tree.*/
/*   @see http://twig.sensiolabs.org/doc/tags/macro.html*/
/* #}*/
/* {{ menus.menu_links(items, attributes, 0) }}*/
/* */
/* {% macro menu_links(items, attributes, menu_level) %}*/
/*   {% import _self as menus %}*/
/*   {% if items %}*/
/*     {% if menu_level == 0 %}*/
/*       <ul{{ attributes.addClass('menu', 'nav', 'navbar-nav') }}>*/
/*     {% else %}*/
/*       <ul{{ attributes.addClass('dropdown-menu') }}>*/
/*     {% endif %}*/
/*     {% for item in items %}*/
/*       {%*/
/*         set item_classes = [*/
/*           'expanded',*/
/*           'dropdown',*/
/*           item.in_active_trail ? 'active',*/
/*         ]*/
/*       %}*/
/*       {% if menu_level == 0 and item.is_expanded %}*/
/*         <li{{ item.attributes.addClass(item_classes) }}>*/
/*         <a href="{{ item.url }}" class="dropdown-toggle" data-target="#" data-toggle="dropdown">{{ item.title }} <span class="caret"></span></a>*/
/*       {% else %}*/
/*         <li{{ item.attributes.addClass(item_classes) }}>*/
/*         {{ link(item.title, item.url) }}*/
/*       {% endif %}*/
/*       {% if item.below %}*/
/*         {{ menus.menu_links(item.below, attributes.removeClass('nav', 'navbar-nav'), menu_level + 1) }}*/
/*       {% endif %}*/
/*       </li>*/
/*     {% endfor %}*/
/*     </ul>*/
/*   </nav>*/
/*   <div class="nav-background"></div>*/
/*     <?xml version="1.0" encoding="utf-8"?>*/
/*     <svg version="1.1" id="hamburger-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"*/
/*     	 viewBox="0 0 171 171" style="enable-background:new 0 0 171 171;" xml:space="preserve">*/
/*     <style type="text/css">*/
/*     	.st0{fill:#3a0460;}*/
/*     </style>*/
/*     <g id="hamburger">*/
/*     	<path id="veggie-patty" class="st0" d="M126.5,88h-81c-1.7,0-3-1.3-3-3s1.3-3,3-3h81c1.7,0,3,1.3,3,3S128.2,88,126.5,88z"/>*/
/*     	<path id="lower-bun" class="st0" d="M126.5,70h-81c-1.7,0-3-1.3-3-3s1.3-3,3-3h81c1.7,0,3,1.3,3,3S128.2,70,126.5,70z"/>*/
/*     	<path id="upper-bun" class="st0" d="M126.5,106h-81c-1.7,0-3-1.3-3-3s1.3-3,3-3h81c1.7,0,3,1.3,3,3S128.2,106,126.5,106z"/>*/
/*     </g>*/
/*     <g id="close">*/
/*     	<circle id="circle" class="st0" cx="86" cy="85" r="1.9"/>*/
/*     	<path id="lower-line" class="st0" d="M112.5,115.8L55.2,58.5c-1.2-1.2-1.2-3.1,0-4.2c1.2-1.2,3.1-1.2,4.2,0l57.3,57.3*/
/*     		c1.2,1.2,1.2,3.1,0,4.2C115.6,116.9,113.7,116.9,112.5,115.8z"/>*/
/*     	<path id="upper-line" class="st0" d="M116.8,58.5l-57.3,57.3c-1.2,1.2-3.1,1.2-4.2,0c-1.2-1.2-1.2-3.1,0-4.2l57.3-57.3*/
/*     		c1.2-1.2,3.1-1.2,4.2,0C117.9,55.4,117.9,57.3,116.8,58.5z"/>*/
/*     </g>*/
/*     </svg>*/
/*   {% endif %}*/
/* {% endmacro %}*/
/* */
