<?php

/**
 * Site
 *
 * @package   Kirby CMS
 * @author    Bastian Allgeier <bastian@getkirby.com>
 * @link      http://getkirby.com
 * @copyright Bastian Allgeier
 * @license   http://getkirby.com/license
 */
abstract class SiteAbstract extends Page {

  // the current page
  public $page = null;

  // options for the site and all dependent objects
  public $options = array(
    'url'                    => '/',
    'rewrite'                => true,
    'error'                  => 'error',
    'home'                   => 'home',
    'content.file.extension' => 'txt',
    'content.file.ignore'    => array(),
    'tinyurl.folder'         => 'x',
    'tinyurl.enabled'        => true,
    'headers'                => array()
  );

  /**
   * Constructor
   *
   */
  public function __construct($params = array()) {
    $this->options = array_merge($this->options, $params);
    $this->url     = $this->options['url'];
    $this->depth   = 0;
    $this->uri     = '';
    $this->site    = $this;
    $this->page    = null;

    // build ugly urls if rewriting is disabled
    if($this->options['rewrite'] === false) {
      $this->url .= '/index.php';
    }

    if(!isset($this->options['root.templates'])) {
      $this->options['root.templates'] = $this->options['root.site'] . DS . 'templates';
    }

    $this->root    = $this->options['root.content'];
    $this->dirname = basename($this->root);

    // default fallback for the content folder url
    if(!isset($this->options['content.url'])) {
      $this->options['content.url'] = url::makeAbsolute('content', $this->options['url']);
    }

  }

  /**
   * Cleans the temporary internal cache
   */
  public function reset() {
    $this->cache = array();
  }

  /**
   * The base diruri is bascially just an empty string
   *
   * @return string
   */
  public function diruri() {
    return '';
  }

  /**
   * Returns the base url for the site
   *
   * @return string
   */
  public function url() {
    return $this->url;
  }

  /**
   * Checks if this object is the main site
   *
   * @return boolean
   */
  public function isSite() {
    return true;
  }

  /**
   * Returns the usable template
   *
   * @return string
   */
  public function template() {
    return 'site';
  }

  /**
   * The site has no template
   *
   * @return boolean
   */
  public function templateFile() {
    return false;
  }

  /**
   * Returns the intended template
   *
   * @return string
   */
  public function intendedTemplate() {
    return 'site';
  }

  /**
   * Again, the site has no template!
   *
   * @return boolean
   */
  public function intendedTemplateFile() {
    return false;
  }

  /**
   * There can't be a template for the site
   * Didn't you still get it yet?
   *
   * @return boolean
   */
  public function hasTemplate() {
    return false;
  }

  /**
   * Sets the currently active page
   * and returns its page object
   *
   * @param string $uri
   * @return Page
   */
  public function visit($uri = '') {

    $uri = trim($uri, '/');

    if(empty($uri)) {
      return $this->page = $this->homePage();
    } else {
      if($page = $this->children()->find($uri)) {
        return $this->page = $page;
      } else {
        return $this->page = $this->errorPage();
      }
    }

  }

  /**
   * Returns the currently active page or any other page by uri
   *
   * @param string $uri Optional uri to get any page on the site
   * @return Page
   */
  public function page($uri = null) {
    if(is_null($uri)) {
      return is_null($this->page) ? $this->page = $this->homePage() : $this->page;
    } else {
      return $this->children()->find($uri);
    }
  }

  /**
   * Alternative for $this->children()
   *
   * @return Children
   */
  public function pages() {
    return $this->children();
  }

  /**
   * Builds a breadcrumb collection
   *
   * @return Children
   */
  public function breadcrumb() {

    if(isset($this->cache['breadcrumb'])) return $this->cache['breadcrumb'];

    // get all parents and flip the order
    $crumb = $this->page()->parents()->flip();

    // add the home page
    $crumb->prepend($this->homePage()->uri(), $this->homePage());

    // add the active page
    $crumb->append($this->page()->uri(), $this->page());

    return $this->cache['breadcrumb'] = $crumb;

  }

  /**
   * Alternative for $this->page()
   *
   * @return Page
   */
  public function activePage() {
    return $this->page();
  }

  /**
   * Returns the error page object
   *
   * @return Page
   */
  public function errorPage() {
    if(isset($this->cache['errorPage'])) return $this->cache['errorPage'];
    return $this->cache['errorPage'] = $this->children()->find($this->options['error']);
  }

  /**
   * Returns the home page object
   *
   * @return Page
   */
  public function homePage() {
    if(isset($this->cache['homePage'])) return $this->cache['homePage'];
    return $this->cache['homePage'] = $this->children()->find($this->options['home']);
  }

  /**
   * Returns the locale for the site
   *
   * @return string
   */
  public function locale() {
    return isset($this->options['locale']) ? $this->options['locale'] : 'en_US';
  }

  /**
   * Checks if the site is a multi language site
   *
   * @return boolean
   */
  public function multilang() {
    return false;
  }

  /**
   * Returns a collection of all users
   *
   * @return Users
   */
  public function users() {
    return new Users();
  }

  /**
   * Returns the current user
   *
   * @param string $username Optional way to search for a single user
   * @return User
   */
  public function user($username = null) {
    if(is_null($username)) return User::current();
    try {
      return new User($username);
    } catch(Exception $e) {
      return null;
    }
  }

}