<?php

/* sites/all/themes/vectorplayground/templates/system/html.html.twig */
class __TwigTemplate_1a83ddc12836462a9b107791a5e49bb491deadc06297a4c939770d485fb57467 extends Twig_Template
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
        $tags = array("set" => 48);
        $filters = array("clean_class" => 50, "raw" => 60, "safe_join" => 61, "t" => 89);
        $functions = array();

        try {
            $this->env->getExtension('sandbox')->checkSecurity(
                array('set'),
                array('clean_class', 'raw', 'safe_join', 't'),
                array()
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

        // line 48
        $context["body_classes"] = array(0 => ((        // line 49
(isset($context["logged_in"]) ? $context["logged_in"] : null)) ? ("user-logged-in") : ("")), 1 => (( !        // line 50
(isset($context["root_path"]) ? $context["root_path"] : null)) ? ("path-frontpage") : (("path-" . \Drupal\Component\Utility\Html::getClass((isset($context["root_path"]) ? $context["root_path"] : null))))), 2 => ((        // line 51
(isset($context["node_type"]) ? $context["node_type"] : null)) ? (("page-node-type-" . \Drupal\Component\Utility\Html::getClass((isset($context["node_type"]) ? $context["node_type"] : null)))) : ("")), 3 => ((        // line 52
(isset($context["db_offline"]) ? $context["db_offline"] : null)) ? ("db-offline") : ("")), 4 => (($this->getAttribute($this->getAttribute(        // line 53
(isset($context["theme"]) ? $context["theme"] : null), "settings", array()), "navbar_position", array())) ? (("navbar-is-" . $this->getAttribute($this->getAttribute((isset($context["theme"]) ? $context["theme"] : null), "settings", array()), "navbar_position", array()))) : ("")), 5 => (($this->getAttribute(        // line 54
(isset($context["theme"]) ? $context["theme"] : null), "has_glyphicons", array())) ? ("has-glyphicons") : ("")));
        // line 57
        echo "<!DOCTYPE html>
<html ";
        // line 58
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["html_attributes"]) ? $context["html_attributes"] : null), "html", null, true));
        echo ">
  <head>
    <head-placeholder token=\"";
        // line 60
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["placeholder_token"]) ? $context["placeholder_token"] : null)));
        echo "\">
    <title>";
        // line 61
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar($this->env->getExtension('drupal_core')->safeJoin($this->env, (isset($context["head_title"]) ? $context["head_title"] : null), " | ")));
        echo "</title>
    <link rel=\"apple-touch-icon-precomposed\" sizes=\"57x57\" href=\"/";
        // line 62
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/apple-touch-icon-57x57.png\" />
    <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"/";
        // line 63
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/apple-touch-icon-114x114.png\" />
    <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"/";
        // line 64
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/apple-touch-icon-72x72.png\" />
    <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"/";
        // line 65
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/apple-touch-icon-144x144.png\" />
    <link rel=\"apple-touch-icon-precomposed\" sizes=\"60x60\" href=\"/";
        // line 66
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/apple-touch-icon-60x60.png\" />
    <link rel=\"apple-touch-icon-precomposed\" sizes=\"120x120\" href=\"/";
        // line 67
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/apple-touch-icon-120x120.png\" />
    <link rel=\"apple-touch-icon-precomposed\" sizes=\"76x76\" href=\"/";
        // line 68
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/apple-touch-icon-76x76.png\" />
    <link rel=\"apple-touch-icon-precomposed\" sizes=\"152x152\" href=\"/";
        // line 69
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/apple-touch-icon-152x152.png\" />
    <link rel=\"icon\" type=\"image/png\" href=\"/";
        // line 70
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/favicon-196x196.png\" sizes=\"196x196\" />
    <link rel=\"icon\" type=\"image/png\" href=\"/";
        // line 71
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/favicon-96x96.png\" sizes=\"96x96\" />
    <link rel=\"icon\" type=\"image/png\" href=\"/";
        // line 72
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/favicon-32x32.png\" sizes=\"32x32\" />
    <link rel=\"icon\" type=\"image/png\" href=\"/";
        // line 73
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/favicon-16x16.png\" sizes=\"16x16\" />
    <link rel=\"icon\" type=\"image/png\" href=\"/";
        // line 74
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/favicon-128.png\" sizes=\"128x128\" />
    <meta name=\"application-name\" content=\"&nbsp;\"/>
    <meta name=\"msapplication-TileColor\" content=\"#FFFFFF\" />
    <meta name=\"msapplication-TileImage\" content=\"/";
        // line 77
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/mstile-144x144.png\" />
    <meta name=\"msapplication-square70x70logo\" content=\"/";
        // line 78
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/mstile-70x70.png\" />
    <meta name=\"msapplication-square150x150logo\" content=\"/";
        // line 79
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/mstile-150x150.png\" />
    <meta name=\"msapplication-wide310x150logo\" content=\"/";
        // line 80
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/mstile-310x150.png\" />
    <meta name=\"msapplication-square310x310logo\" content=\"/";
        // line 81
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["directory"]) ? $context["directory"] : null), "html", null, true));
        echo "/mstile-310x310.png\" />
    <css-placeholder token=\"";
        // line 82
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["placeholder_token"]) ? $context["placeholder_token"] : null)));
        echo "\">
    <js-placeholder token=\"";
        // line 83
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["placeholder_token"]) ? $context["placeholder_token"] : null)));
        echo "\">
    <link href=\"https://fonts.googleapis.com/css?family=Quicksand:300,400,700|Ubuntu:300,300i,400,400i,500,500i,700,700i\" rel=\"stylesheet\">
  </head>
  <body";
        // line 86
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, $this->getAttribute((isset($context["attributes"]) ? $context["attributes"] : null), "addClass", array(0 => (isset($context["body_classes"]) ? $context["body_classes"] : null)), "method"), "html", null, true));
        echo ">
    <div class=\"background-fixed\"></div>
    <a href=\"#main-content\" class=\"visually-hidden focusable skip-link\">
      ";
        // line 89
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar(t("Skip to main content")));
        echo "
    </a>
    <div class=\"scroll-container\">
      ";
        // line 92
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["page_top"]) ? $context["page_top"] : null), "html", null, true));
        echo "
      ";
        // line 93
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["page"]) ? $context["page"] : null), "html", null, true));
        echo "
      ";
        // line 94
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->escapeFilter($this->env, (isset($context["page_bottom"]) ? $context["page_bottom"] : null), "html", null, true));
        echo "
    </div>
    <js-bottom-placeholder token=\"";
        // line 96
        echo $this->env->getExtension('sandbox')->ensureToStringAllowed($this->env->getExtension('drupal_core')->renderVar((isset($context["placeholder_token"]) ? $context["placeholder_token"] : null)));
        echo "\">
  </body>
</html>
";
    }

    public function getTemplateName()
    {
        return "sites/all/themes/vectorplayground/templates/system/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  176 => 96,  171 => 94,  167 => 93,  163 => 92,  157 => 89,  151 => 86,  145 => 83,  141 => 82,  137 => 81,  133 => 80,  129 => 79,  125 => 78,  121 => 77,  115 => 74,  111 => 73,  107 => 72,  103 => 71,  99 => 70,  95 => 69,  91 => 68,  87 => 67,  83 => 66,  79 => 65,  75 => 64,  71 => 63,  67 => 62,  63 => 61,  59 => 60,  54 => 58,  51 => 57,  49 => 54,  48 => 53,  47 => 52,  46 => 51,  45 => 50,  44 => 49,  43 => 48,);
    }
}
/* {#*/
/* /***/
/*  * @file*/
/*  * Default theme implementation to display the basic html structure of a single*/
/*  * Drupal page.*/
/*  **/
/*  * Variables:*/
/*  * - $css: An array of CSS files for the current page.*/
/*  * - $language: (object) The language the site is being displayed in.*/
/*  *   $language->language contains its textual representation.*/
/*  *   $language->dir contains the language direction. It will either be 'ltr' or*/
/*  *   'rtl'.*/
/*  * - $rdf_namespaces: All the RDF namespace prefixes used in the HTML document.*/
/*  * - $grddl_profile: A GRDDL profile allowing agents to extract the RDF data.*/
/*  * - $head_title: A modified version of the page title, for use in the TITLE*/
/*  *   tag.*/
/*  * - $head_title_array: (array) An associative array containing the string parts*/
/*  *   that were used to generate the $head_title variable, already prepared to be*/
/*  *   output as TITLE tag. The key/value pairs may contain one or more of the*/
/*  *   following, depending on conditions:*/
/*  *   - title: The title of the current page, if any.*/
/*  *   - name: The name of the site.*/
/*  *   - slogan: The slogan of the site, if any, and if there is no title.*/
/*  * - $head: Markup for the HEAD section (including meta tags, keyword tags, and*/
/*  *   so on).*/
/*  * - $styles: Style tags necessary to import all CSS files for the page.*/
/*  * - $scripts: Script tags necessary to load the JavaScript files and settings*/
/*  *   for the page.*/
/*  * - $page_top: Initial markup from any modules that have altered the*/
/*  *   page. This variable should always be output first, before all other dynamic*/
/*  *   content.*/
/*  * - $page: The rendered page content.*/
/*  * - $page_bottom: Final closing markup from any modules that have altered the*/
/*  *   page. This variable should always be output last, after all other dynamic*/
/*  *   content.*/
/*  * - $classes String of classes that can be used to style contextually through*/
/*  *   CSS.*/
/*  **/
/*  * @ingroup templates*/
/*  **/
/*  * @see bootstrap_preprocess_html()*/
/*  * @see template_preprocess()*/
/*  * @see template_preprocess_html()*/
/*  * @see template_process()*/
/*  *//* */
/* #}*/
/* {%*/
/*   set body_classes = [*/
/*     logged_in ? 'user-logged-in',*/
/*     not root_path ? 'path-frontpage' : 'path-' ~ root_path|clean_class,*/
/*     node_type ? 'page-node-type-' ~ node_type|clean_class,*/
/*     db_offline ? 'db-offline',*/
/*     theme.settings.navbar_position ? 'navbar-is-' ~ theme.settings.navbar_position,*/
/*     theme.has_glyphicons ? 'has-glyphicons',*/
/*   ]*/
/* %}*/
/* <!DOCTYPE html>*/
/* <html {{ html_attributes }}>*/
/*   <head>*/
/*     <head-placeholder token="{{ placeholder_token|raw }}">*/
/*     <title>{{ head_title|safe_join(' | ') }}</title>*/
/*     <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/{{ directory }}/apple-touch-icon-57x57.png" />*/
/*     <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/{{ directory }}/apple-touch-icon-114x114.png" />*/
/*     <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/{{ directory }}/apple-touch-icon-72x72.png" />*/
/*     <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/{{ directory }}/apple-touch-icon-144x144.png" />*/
/*     <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/{{ directory }}/apple-touch-icon-60x60.png" />*/
/*     <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/{{ directory }}/apple-touch-icon-120x120.png" />*/
/*     <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/{{ directory }}/apple-touch-icon-76x76.png" />*/
/*     <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/{{ directory }}/apple-touch-icon-152x152.png" />*/
/*     <link rel="icon" type="image/png" href="/{{ directory }}/favicon-196x196.png" sizes="196x196" />*/
/*     <link rel="icon" type="image/png" href="/{{ directory }}/favicon-96x96.png" sizes="96x96" />*/
/*     <link rel="icon" type="image/png" href="/{{ directory }}/favicon-32x32.png" sizes="32x32" />*/
/*     <link rel="icon" type="image/png" href="/{{ directory }}/favicon-16x16.png" sizes="16x16" />*/
/*     <link rel="icon" type="image/png" href="/{{ directory }}/favicon-128.png" sizes="128x128" />*/
/*     <meta name="application-name" content="&nbsp;"/>*/
/*     <meta name="msapplication-TileColor" content="#FFFFFF" />*/
/*     <meta name="msapplication-TileImage" content="/{{ directory }}/mstile-144x144.png" />*/
/*     <meta name="msapplication-square70x70logo" content="/{{ directory }}/mstile-70x70.png" />*/
/*     <meta name="msapplication-square150x150logo" content="/{{ directory }}/mstile-150x150.png" />*/
/*     <meta name="msapplication-wide310x150logo" content="/{{ directory }}/mstile-310x150.png" />*/
/*     <meta name="msapplication-square310x310logo" content="/{{ directory }}/mstile-310x310.png" />*/
/*     <css-placeholder token="{{ placeholder_token|raw }}">*/
/*     <js-placeholder token="{{ placeholder_token|raw }}">*/
/*     <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,700|Ubuntu:300,300i,400,400i,500,500i,700,700i" rel="stylesheet">*/
/*   </head>*/
/*   <body{{ attributes.addClass(body_classes) }}>*/
/*     <div class="background-fixed"></div>*/
/*     <a href="#main-content" class="visually-hidden focusable skip-link">*/
/*       {{ 'Skip to main content'|t }}*/
/*     </a>*/
/*     <div class="scroll-container">*/
/*       {{ page_top }}*/
/*       {{ page }}*/
/*       {{ page_bottom }}*/
/*     </div>*/
/*     <js-bottom-placeholder token="{{ placeholder_token|raw }}">*/
/*   </body>*/
/* </html>*/
/* */
